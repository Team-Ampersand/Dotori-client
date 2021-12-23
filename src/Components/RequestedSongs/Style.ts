import styled from "styled-components";

interface StyleProps {
  thumbnailKey?: string;
}

export const Postioner = styled.div`
  margin-top: 1%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  span {
    padding: 30px;
    font-size: 32px;
    font-weight: bold;
  }
`;

export const SongWrapper = styled.div`
  max-height: 657.3px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 2% 3% 2% 3%;
  flex: 1;
  background: #ffffff;
  opacity: 0.8;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-height: 1509px) {
    max-height: 1100px;
  }
  @media (max-height: 1150px) {
    max-height: 750px;
  }
  @media (max-height: 1006px) {
    max-height: 650px;
  }
  @media (max-height: 950px) {
    max-height: 600px;
  }
  @media (max-height: 850px) {
    max-height: 500px;
  }
  @media (max-height: 800px) {
    max-height: 450px;
  }
  @media (max-height: 750px) {
    max-height: 400px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SongList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 3% 2% 3%;
  width: 95%;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  div {
    font-size: 20px;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      &:link {
        color: red;
        text-decoration: none;
      }
      &:visited {
        color: black;
        text-decoration: none;
      }
      &:hover {
        color: gray;
      }
    }
  }
`;

export const StatusWrapper = styled.p<{ status: number }>`
  padding: 3px 24px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.status === 0
      ? "#FFE146"
      : props.status === 1
      ? "#d9f6de"
      : "#fcecec"};
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props.status === 0
      ? "#FF8200"
      : props.status === 1
      ? "#28c842"
      : "#e11a1a"};
`;
export const ThumbnailKey = styled.iframe<StyleProps>`
  display: flex;
  width: 100px;
  height: 48px;
  z-index: 1;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) =>
    props.thumbnailKey
      ? `background-image: url(https://img.youtube.com/vi/${props.thumbnailKey}/default.jpg);`
      : "background-color: #ededed; display: none;"}
`;
