import * as S from "./Style";
import { Link } from "react-router-dom";
import Logo from "Assets/Svg/Logo";

const NotFoundPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <h1>페이지가 존재하지 않습니다.</h1>
      <p>주소가 잘못 입력되었거나, 페이지가 삭제/이동 되었을 수 있습니다.</p>
      <S.Btn to="/">홈으로</S.Btn>
    </S.Positioner>
  );
};

export default NotFoundPage;
