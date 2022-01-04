import React, { useEffect, useState } from "react";
import { DotoriLogo } from "Assets/Svg";
import * as S from "./Style";
import { Link, useHistory } from "react-router-dom";
import { HasToken } from "../../Atoms";
import { useSetRecoilState } from "recoil";
import member from "../../Api/member";
import refresh from "../../Api/refresh";
import { setCookie, deleteCookie } from "Utils/Cookie";
import { rolelookup } from "Utils/Libs/roleLookup";
import useSWR from "swr";

const TrySignin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const setLogged = useSetRecoilState(HasToken);
  const history = useHistory();

  const onRefresh = async () => {
    try {
      const res = await refresh.refresh();

      // setCookie('Dotori_accessToken', res.data.data.NewAccessToken, {
      // 	path: '/',
      // 	secure: true,
      // });
      // setCookie('Dotori_refreshToken', res.data.data.NewRefreshToken, {
      // 	path: '/',
      // 	secure: true,
      // });

      localStorage.setItem("Dotori_accessToken", res.data.data.NewAccessToken);
      localStorage.setItem(
        "Dotori_refreshToken",
        res.data.data.NewRefreshToken
      );
    } catch (e) {
      alert("장시간 자리에서 비워 로그아웃 되었습니다. 다시 로그인 해주세요");

      // deleteCookie('Dotori_accessToken');
      // deleteCookie('Dotori_refreshToken');
      // deleteCookie('role');

      localStorage.removeItem("Dotori_accessToken");
      localStorage.removeItem("Dotori_refreshToken");
      localStorage.removeItem("role");

      setLogged(false);
      history.push("/signin");
      window.location.reload();
    }
  };

  const onSignin = async () => {
    try {
      if (id === "") {
        return alert("이메일을 입력해주세요.");
      } else if (password === "") {
        return alert("비밀번호를 입력해주세요.");
      }
      const res = await member.signin(id + "@gsm.hs.kr", password);

      // setCookie('Dotori_accessToken', res.data.data.accessToken);

      // setCookie('Dotori_refreshToken', res.data.data.refreshToken, {
      // 	path: '/',
      // 	secure: true,
      // });
      // setCookie('role', await rolelookup(), {
      // 	path: '/',
      // 	secure: true,
      // });

      localStorage.setItem("Dotori_accessToken", res.data.data.accessToken);
      localStorage.setItem("Dotori_refreshToken", res.data.data.refreshToken);
      localStorage.setItem("role", await rolelookup());

      setLogged(true);
      history.push("/home");
      window.location.reload();
    } catch (e: any) {
      if (e.message === "Request failed with status code 409") {
        alert("비밀번호가 올바르지 않습니다.");
      } else if (e.message === "Request failed with status code 404") {
        alert("해당 이메일에 해당하는 학생을 찾을 수 없습니다.");
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
        <S.InputWrapper>
          <label>@gsm.hs.kr</label>
          <S.InputStyle
            placeholder="아이디"
            type="text"
            displayed={false}
            onChange={({ target: { value } }) => setId(value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") onSignin("");
            }}
            maxLength={6}
          />
        </S.InputWrapper>
        <S.InputStyle
          placeholder="비밀번호"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setPassword(value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") onSignin("");
          }}
        />
        <S.ButtonStyle
          onClick={() => {
            onSignin("");
          }}
        >
          로그인
        </S.ButtonStyle>
        <S.Line />
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
