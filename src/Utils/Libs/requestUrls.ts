//멤버 관리
export const MemberController = {
  // 로그인
  signin: () => {
    return "/signin";
  },
  // 회원 가입
  signup: () => {
    return "/signup";
  },
  // 로그아웃
  logout: () => {
    return "/logout";
  },
  // 비밀번호 변경
  change: () => {
    return "/change/password";
  },
  // 회원탈퇴
  delete: () => {
    return "/delete";
  },
};

// 멤버 자습신청 관리
export const selfStudyController = {
  // 자습신청
  apply: () => {
    return "/member/selfstudy";
  },
  // 자습신청
  cancel: () => {
    return "/member/cancel/selfstudy";
  },
};

// 공지사항 관리
export const noticeController = {
  // admin
  // admin 공지사항 전체 조회
  getNotice: () => {
    return "/admin/board";
  },
  // admin 공지사항 페이지별 조회
  getNoticeDetail: (page: number) => {
    return `/admin/board?page=${page}`;
  },
  // admin 공지사항 작성
  adminNoticeWrite: () => {
    return "/admin/board";
  },
  // admin 공지사항 개별 조회
  getNoticeItem: (boardId) => {
    return `/admin/board/${boardId}`;
  },
  // admin 공지사항 삭제
  deleteNotice: (boardId) => {
    return `/admin/board/${boardId}`;
  },
  // 공지사항 수정
  updateNotice: (boardId) => {
    return `/admin/board/${boardId}`;
  },
};
