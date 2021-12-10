import { useState } from "react";
import * as S from "./Style";
import { Prompt, useHistory } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";
import notice from "../../Api/notice";
import { rolelookup } from "Utils/Libs/roleLookup";

const NoticeWrite: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getContent = (e) => {
    setContent(e.target.value);
  };

  const [shouldConfirmState, setShouldConfirmState] = useState(true);
  const confirm = () => {
    setShouldConfirmState(false);
  };

  const history = useHistory();

  const createNotice = async () => {
    await confirm();
    try {
      const role = await rolelookup();
      const res = await notice.noticeWrite(role, title, content);
      await history.push("/notice");
      return res;
    } catch (e: any) {
      console.log(e.message);
      if (e.message === "Error: Request failed with status code 400") {
        alert("제목과 내용을 입력해주세요.");
      }
    }
  };

  useBeforeunload((e) => {
    e.preventDefault();
  });

  return (
    <>
      <Prompt
        when={shouldConfirmState}
        message={"주의! 변경사항이 저장되지 않을 수 있습니다."}
      />
      <S.Positioner>
        <S.Container>
          <S.TitleInput
            placeholder="제목을 입력해주세요 (1 ~ 45자)"
            onChange={getTitle}
          />
          <S.ContentInput
            placeholder="내용을 입력해주세요 (1 ~ 250자)"
            onChange={getContent}
          />
          <S.BtnWrapper>
            <S.DeleteBtn onClick={() => history.push("/notice")}>
              취소
            </S.DeleteBtn>
            <S.Btn onClick={createNotice}>생성</S.Btn>
          </S.BtnWrapper>
        </S.Container>
      </S.Positioner>
    </>
  );
};

export default NoticeWrite;
