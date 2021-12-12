import React, { useState } from "react";
import { DotoriLogo } from "Assets/Svg";
import * as S from "./Style";
import { Link, useHistory } from "react-router-dom";
import { HasToken } from "../../Atoms";
import { useSetRecoilState } from "recoil";
import member from "../../Api/member";
import refresh from "../../Api/refresh";
import { setCookie, deleteCookie } from "Utils/Cookie";
import { rolelookup } from "Utils/Libs/roleLookup";

const TrySignin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const setLogged = useSetRecoilState(HasToken);
  const history = useHistory();

  const onRefresh = async () => {
    try {
      const res = await refresh.refresh();

      setCookie("Dotori_accessToken", res.data.data.NewAccessToken, {
        path: "/",
        secure: true,
      });
      setCookie("Dotori_refreshToken", res.data.data.NewRefreshToken, {
        path: "/",
        secure: true,
      });

      setTimeout(onRefresh, 1800000);
    } catch (e) {
      alert("장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요");

      deleteCookie("Dotori_accessToken");
      deleteCookie("Dotori_refreshToken");
      deleteCookie("role");

      setLogged(false);
      history.push("/signin");
    }
  };

  const onSignin = async () => {
    try {
      const res = await member.signin(id, password);

      setCookie("Dotori_accessToken", res.data.data.accessToken, {
        path: "/",
        secure: true,
      });
      setCookie("Dotori_refreshToken", res.data.data.refreshToken, {
        path: "/",
        secure: true,
      });
      setCookie("role", await rolelookup(), {
        path: "/",
        secure: true,
      });

      setLogged(true);
      history.push("/home");
      window.location.reload();
      setTimeout(onRefresh, 1800000);
    } catch (e: any) {
      if (e.message === "Request failed with status code 409") {
        alert("아이디 혹은 비번이 틀렸습니다.");
      } else if (e.message === "Request failed with status code 404") {
        alert("존재 하지 않는 로그인 정보입니다.");
      } else {
        alert(e);
      }
    }
  };
  return [setId, setPassword, onSignin];
};

const SigninForm: React.FC = () => {
  const [setId, setPassword, onSignin] = TrySignin();
  return (
    <>
      <S.Positioner>
        <S.LogoWrapper>
          <DotoriLogo />
        </S.LogoWrapper>
        <S.InputStyle
          placeholder="아이디"
          type="text"
          displayed={false}
          onChange={({ target: { value } }) => setId(value)}
        />
        <S.InputStyle
          placeholder="비밀번호"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <S.ButtonStyle
          onClick={() => {
            onSignin("");
          }}
        >
          로그인
        </S.ButtonStyle>
        <S.Line />
        <S.SaveContainer>
          <S.CheckBox type="checkbox" />
          <span>아이디 저장</span>
        </S.SaveContainer>
        <S.SignupContainer>
          <span>아직 계정이 없으신가요?</span>
          <Link to="/signup">회원가입</Link>
        </S.SignupContainer>
        <S.FindContainer>
          <span>비밀번호를 잊으셨나요?</span>
          <Link to="/password">비밀번호 찾기</Link>
        </S.FindContainer>
      </S.Positioner>
    </>
  );
};

export default SigninForm;
