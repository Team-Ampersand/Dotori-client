import React, { useEffect, useState } from "react";
import * as S from "./Style";
import NoticeBoardItem from "../NoticeBoardItem/NoticeBoardItem";
import { Link } from "react-router-dom";
import notice from "Api/notice";

interface board {
  id: number;
  title: string;
  roles: Array<any>;
  createdDate: string;
}

const NoticeBoard: React.FC = () => {
  const [board, setBoard] = useState<board[]>([]);

  const getNotice = async () => {
    const role = await localStorage.getItem("role");
    return await notice.getNotice(role);
  };
  const getNoticeDetail = async (page: number) => {
    const role = await localStorage.getItem("role");
    return await notice.getNoticeDetail(role, page);
  };

  const [role, setRole] = useState<string | null>("");

  const settingRole = async () => {
    const role = await localStorage.getItem("role");
    setRole(role);
  };

  const checkMember = () => {
    if (role === "member") {
      return true;
    } else return false;
  };

  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    getNotice().then(async (res) => {
      await setTotalPage(res?.data.data.totalPages);
    });
  }, []);

  useEffect(() => {
    settingRole();
    setTotalPage(totalPage);
    if (totalPage > 0) {
      getNoticeDetail(totalPage - 1).then((response) =>
        setBoard(response?.data.data.content)
      );
    }
  }, [totalPage]);

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
