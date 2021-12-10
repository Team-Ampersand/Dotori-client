import { DotoriLogo } from "Assets/Svg";
import React, { useState } from "react";
import * as S from "./Style";
import member from "Api/member";
import { useHistory } from "react-router";

const authPassword = async (id: string, setDisabled) => {
  try {
    await member.authPassword(id);
    setDisabled(true);
    alert("이메일을 확인해주세요!");
  } catch (e: any) {
    if (e.message === "Request failed with status code 400") {
      alert("이메일 형식이 잘못 되었습니다.");
    } else if (e.message === "Request failed with status code 404") {
      alert("존재하지 않는 회원 정보입니다.");
    }
  }
};

const findPassword = async (
  id: string,
  key: string,
  newPw: string,
  history
) => {
  try {
    await member.findPassword(id, key, newPw);
    alert("비밀번호가 변경 되었습니다!");
    history.push("/signin");
  } catch (e: any) {
    alert(
      e.message === "Request failed with status code 409"
        ? alert("인증 키가 다릅니다.")
        : alert("개발자에게 문의 해주세요!" + e)
    );
  }
};

const changePassword = async (password: string, newPw: string, history) => {
  try {
    await member.passwordChange(password, newPw);
    alert("비밀번호가 변경되었습니다.");
    history.push("/home");
  } catch (e: any) {
    alert(
      e.message === "Request failed with status code 409"
        ? alert("현재 비밀번호가 다릅니다.")
        : alert("개발자에게 문의 해주세요!" + e)
    );
  }
};

const returnPassworForm = (
  setId,
  setClicked,
  setPassword,
  setKey,
  setNewPw,
  setDisabled,
  key,
  id,
  clicked,
  password,
  newPw,
  disabled,
  history
) => {
  if (window.location.pathname === "/password") {
    return (
      <>
        <S.EmailContainer>
          <S.InputStyle
            placeholder="이메일을 입력하세요"
            type="text"
            displayed={false}
            onChange={({ target: { value } }) => setId(value)}
            disabled={disabled}
          />
          <button
            onClick={() => {
              if (id === "") {
                alert("이메일을 입력하지 않았습니다.");
              } else {
                authPassword(id, setDisabled);
                setClicked(false);
              }
            }}
            disabled={disabled}
          >
            인증
          </button>
        </S.EmailContainer>
        <S.InputStyle
          placeholder="인증 번호"
          type="text"
          displayed={clicked}
          onChange={({ target: { value } }) => setKey(value)}
        />
        <S.InputStyle
          placeholder="새로운 비밀번호"
          type="password"
          displayed={clicked}
          onChange={({ target: { value } }) => setNewPw(value)}
        />
        <S.ButtonStyle
          onClick={() => {
            findPassword(id, key, newPw, history);
          }}
        >
          비밀번호 변경
        </S.ButtonStyle>
      </>
    );
  } else {
    return (
      <>
        <S.InputStyle
          placeholder="현재 비밀번호"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <S.InputStyle
          placeholder="새로운 비밀번호"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setNewPw(value)}
        />
        <S.ButtonStyle
          onClick={() => {
            changePassword(password, newPw, history);
          }}
        >
          비밀번호 변경
        </S.ButtonStyle>
      </>
    );
  }
};

const PasswordForm: React.FC = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");
  const [newPw, setNewPw] = useState("");
  const [clicked, setClicked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <S.Positioner>
      <DotoriLogo />
      {returnPassworForm(
        setId,
        setClicked,
        setPassword,
        setKey,
        setNewPw,
        setDisabled,
        key,
        id,
        clicked,
        password,
        newPw,
        disabled,
        history
      )}
    </S.Positioner>
  );
};

export default PasswordForm;
