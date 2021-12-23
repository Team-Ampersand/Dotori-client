import React, { useEffect, useState } from "react";
import * as S from "./Style";
import NoticeBoardItem from "../NoticeBoardItem/NoticeBoardItem";
import { Link } from "react-router-dom";
import notice from "Api/notice";
import { getCookie } from "Utils/Cookie";

interface board {
  id: number;
  title: string;
  roles: Array<any>;
  createdDate: string;
}

const NoticeBoard: React.FC = () => {
  const [board, setBoard] = useState<board[]>([]);

  const getNotice = async () => {
    const role = await getCookie("role");
    return await notice.getNotice(role);
  };
  const getNoticeDetail = async (page: number) => {
    const role = await getCookie("role");
    return await notice.getNoticeDetail(role, page);
  };

  const [role, setRole] = useState<string>("");

  const settingRole = async () => {
    const role = await getCookie("role");
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
      let totalPage = res.data.data.totalPages;
      getNoticeDetail(totalPage - 1).then((res) =>
        setBoard(res.data.data.content)
      );
    });
  }, []);

  const [editState, setEditState] = useState(false);
  const onToggle = () => {
    setEditState(!editState);
  };

  return (
    <>
      <S.Positioner>
        {!checkMember() && (
          <S.BtnWrapper>
            <Link to={"/notice/write"}>
              <S.Btn>작성</S.Btn>
            </Link>
            <S.Btn onClick={onToggle}>{editState ? "완료" : "편집"}</S.Btn>
          </S.BtnWrapper>
        )}
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
        </S.Container>
      </S.Positioner>
    </>
  );
};

export default NoticeBoard;
