import * as S from "./Style";
import Logo from "Assets/Svg/Logo";
import { HasToken } from "Atoms";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { deleteCookie } from "Utils/Cookie";
import member from "Api/member";

const PromotionPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const CheckLogin = useRecoilValue(HasToken);

  useEffect(() => {
    setIsLogin(CheckLogin);
  }, []);

  const TryLogout = () => {
    const onLogout = async () => {
      try {
        await member.logout();
        deleteCookie("Dotori_accessToken");
        deleteCookie("Dotori_refreshToken");
        deleteCookie("role");
        setIsLogin(false);
      } catch (e) {
        alert(e);
      }
    };
    return [onLogout];
  };

  return (
    <>
      <S.Positioner>
        <S.Header>
          <Logo />
          {!isLogin ? (
            <S.BtnWrapper>
              <S.SignBtn to="/signin">로그인</S.SignBtn>
              <S.SignBtn to="/signup">회원가입</S.SignBtn>
            </S.BtnWrapper>
          ) : (
            <S.BtnWrapper>
              <S.SignBtn to="/" onClick={TryLogout}>
                로그아웃
              </S.SignBtn>
            </S.BtnWrapper>
          )}
        </S.Header>
        <S.StyledLink to="/home">
          <h1>D O T O R I</h1>
        </S.StyledLink>
        <p>기숙사 통합 관리 시스템</p>
        <S.Btn to="/home">홈으로</S.Btn>
        <S.Footer>
          <h1>2021 Team-&mpersand</h1>
        </S.Footer>
      </S.Positioner>
    </>
  );
};

export default PromotionPage;
