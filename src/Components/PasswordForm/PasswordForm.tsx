import { DotoriLogo } from "Assets/Svg";
import React, { useState } from "react";
import * as S from "./Style";
import member from "Api/member";
import { useHistory } from "react-router";
import { History } from "history";

// const authPassword = async (id: string, setDisabled) => {
// 	try {
// 		await member.authPassword(id);
// 		setDisabled(true);
// 		alert('이메일을 확인해주세요!');
// 	} catch (e: any) {
// 		if (e.message === 'Request failed with status code 400') {
// 			alert('이메일 형식이 잘못 되었습니다.');
// 		} else if (e.message === 'Request failed with status code 404') {
// 			alert('존재하지 않는 회원 정보입니다.');
// 		}
// 	}
// };

const findPassword = async (newPw: string, history) => {
  try {
    await member.findPassword(newPw);
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
  setPassword: {
    (value: React.SetStateAction<string>): void;
    (arg0: string): void;
  },
  setNewPw: {
    (value: React.SetStateAction<string>): void;
    (arg0: string): void;
  },
  setRepassword: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  newPw: string,
  repassword: string,
  history: History<unknown>
) => {
  if (window.location.pathname === "/password") {
    return (
      <>
        <S.InputStyle
          placeholder="새로운 비밀번호"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setNewPw(value)}
        />
        <S.InputStyle
          placeholder="새로운 비밀번호 재입력"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setRepassword(value)}
        />
        <S.ButtonStyle
          onClick={() => {
            if (newPw !== repassword) alert("입력한 비밀번호가 서로 다릅니다.");
            else findPassword(newPw, history);
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
        <S.InputStyle
          placeholder="새로운 비밀번호 재입력"
          type="password"
          displayed={false}
          onChange={({ target: { value } }) => setRepassword(value)}
        />
        <S.ButtonStyle
          onClick={() => {
            if (newPw === repassword) alert("입력한 비밀번호가 서로 다릅니다.");
            else changePassword(password, newPw, history);
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
  const [password, setPassword] = useState("");
  const [newPw, setNewPw] = useState("");
  const [repassword, setRepassword] = useState("");

  return (
    <S.Positioner>
      <DotoriLogo />
      {returnPassworForm(
        setPassword,
        setNewPw,
        setRepassword,
        password,
        newPw,
        repassword,
        history
      )}
    </S.Positioner>
  );
};

export default PasswordForm;
