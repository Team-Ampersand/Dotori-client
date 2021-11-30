import React, { useEffect, useState } from "react";
import * as S from "./Style";
import NoticeBoardItem from "../NoticeBoardItem/NoticeBoardItem";
import { Link } from "react-router-dom";
import notice from "Api/notice";
import { rolelookup } from "Utils/Libs/roleLookup";

interface board {
  id: number;
  title: string;
  roles: Array<any>;
  createdDate: string;
}

const NoticeBoard: React.FC = () => {
  const [board, setBoard] = useState<board[]>([]);

  const getNotice = async () => {
    const role = await rolelookup();
    return await notice.getNotice(role);
  };
  const getNoticeDetail = async (page: number) => {
    const role = await rolelookup();
    return await notice.getNoticeDetail(role, page);
  };

  const [change, setChange] = useState();

  const [role, setRole] = useState<string>("");

  const settingRole = async () => {
    const role = await rolelookup();
    setRole(role);
  };

  const checkMember = () => {
    if (role === "member") {
      return true;
    } else return false;
  };

  useEffect(() => {
    settingRole();
    getNotice().then(async (res) => {
      if (res.data.code === 1) {
        let i = res.data.data.totalPages;
        console.log(i);
        getNoticeDetail(i - 1).then((re) => setBoard(re.data.data.content));
        setChange(i);
      }
    });
  }, [change]);

  // const prevClick = () => {
  //   setRenderPage(renderPage + 1)s;
  //   console.log(renderPage - 1);
  //   getNotice(renderPage - 1).then((res) => set Board(res.data.data.content));
  //   window.location.reload();
  // };

  // const nextClick = () => {
  //   setRenderPage(renderPage - 1);
  //   console.log(renderPage - 1);
  //   getNotice(renderPage - 1).then((res) => setBoard(res.data.data.content));
  //   window.location.reload();
  // };

  const [editState, setEditState] = useState(false);
  const onToggle = () => {
    setEditState(!editState);
  };

  return (
    <>
      <S.Positioner>
        <S.BtnWrapper isMember={checkMember()}>
          <Link to={"/notice/write"}>
            <S.Btn>작성</S.Btn>
          </Link>
          <S.Btn onClick={onToggle}>{editState ? "완료" : "편집"}</S.Btn>
        </S.BtnWrapper>
        <S.Container>
          {[...board].reverse() &&
            [...board]
              .reverse()
              .map((noticeItem) => (
                <NoticeBoardItem
                  key={noticeItem.id}
                  board_key={noticeItem.id}
                  author={noticeItem.roles}
                  title={noticeItem.title}
                  createdDate={noticeItem.createdDate}
                  editState={editState}
                  role={role}
                />
              ))}
          {/* <S.PageBtnWrapper>
            <S.PageBtn onClick={prevClick}>{"<"}</S.PageBtn>
            <S.PageBtn onClick={nextClick}>{">"}</S.PageBtn> 
          </S.PageBtnWrapper> */}
        </S.Container>
      </S.Positioner>
    </>
  );
};

export default NoticeBoard;
