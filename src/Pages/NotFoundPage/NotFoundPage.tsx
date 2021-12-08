import * as S from "./Style";
import Logo from "Assets/Svg/Logo";

const NotFoundPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      페이지를 찾지 못했습니다.
    </S.Positioner>
  );
};

export default NotFoundPage;
