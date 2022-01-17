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
  //비밀번호 찾기 전 이메일로 인증번호 보내기
  authPassword: () => {
    return "/send/change/password/authkey";
  },
  findPassword: () => {
    return "/verified/auth/change/password";
  },
};

// 공지사항 관리
export const noticeController = {
  // 공지사항 전체 조회
  getNotice: (role: string | null) => {
    return `/${role}/board`;
  },
  // 공지사항 페이지별 조회
  getNoticeDetail: (role: string | null, page: number) => {
    return `/${role}/board?page=${page}`;
  },
  // 공지사항 작성
  noticeWrite: (role: string | null) => {
    return `/${role}/board`;
  },
  // 공지사항 개별 조회
  getNoticeItem: (role: string | null, boardId: number) => {
    return `/${role}/board/${boardId}`;
  },
  // 공지사항 삭제
  noticeDelete: (role: string | null, boardId: number) => {
    return `/${role}/board/${boardId}`;
  },
  // 공지사항 수정
  noticeUpdate: (role: string | null, boardId: number) => {
    return `/${role}/board/${boardId}`;
  },
};

//이메일 인증
export const EmailController = {
  //이메일로 key값 받기
  auth: () => {
    return "/auth";
  },
  //위에서 받은 key값 인증
  authcheck: () => {
    return "/auth/check";
  },
};

//토큰 재발급
export const RefreshTokenController = {
  refresh: () => {
    return "/refresh";
  },
};

//유저 프로필
export const MyPageController = {
  home: () => {
    return "/home";
  },
};

//권한 조회
export const RoleController = {
  role: () => {
    return "/current/role";
  },
};

//자습신청
export const SelfstudyController = {
  //자습신청
  selfStudy: (role: string | null) => {
    return `/${role}/selfstudy`;
  },
  //자습취소
  cancelStudy: (role: string | null) => {
    return `/${role}/cancel/selfstudy`;
  },
  //신청조회
  studyLookup: (role: string | null) => {
    return `/${role}/selfstudy`;
  },
  //반별 신청 조회
  classLookup: (classId: number, role: string | null) => {
    return `/${role}/selfstudy/${classId}`;
  },
  studyInfo: (role: string | null) => {
    return `/${role}/selfstudy/info`;
  },
};

//기상송 신청
export const MusicController = {
  //음악 신청(post) or 조회(get)
  music: (role: string | null) => {
    return `/${role}/music`;
  },
  todayMusic: (role: string | null) => {
    return `/${role}/music/current`;
  },
  deleteMusic: (role: string | null, id: number) => {
    return `/${role}/music/${id}`;
  },
  dateMusic: (role: string | null) => {
    return `/${role}/music/date`;
  },
};

// 학생 정보 변경
export const StuInfoController = {
  // 반별 학생정보 조회
  getClassStuInfo: (role: string | null, classId: number) => {
    return `/${role}/info/${classId}`;
  },
  // 학번 변경
  updateStuNum: (role: string | null) => {
    return `/${role}/info/stunum`;
  },
  // 이름 변경
  updateStuName: (role: string | null) => {
    return `/${role}/info/membername`;
  },
  // 권한 변경
  updateStuRole: (role: string | null) => {
    return `/${role}/info/role`;
  },
};
