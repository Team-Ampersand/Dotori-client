//멤버 관리
export const MemberController = {
	// 로그인
	signin: () => {
		return '/signin';
	},
	// 회원 가입
	signup: () => {
		return '/signup';
	},
	// 로그아웃
	logout: () => {
		return '/logout';
	},
	// 비밀번호 변경
	change: () => {
		return '/change/password';
	},
	// 회원탈퇴
	delete: () => {
		return '/delete';
	},
};

// 공지사항 관리
export const noticeController = {
	// admin
	// admin 공지사항 전체 조회
	getNotice: () => {
		return '/admin/board';
	},
	// admin 공지사항 페이지별 조회
	getNoticeDetail: (page: number) => {
		return `/admin/board?page=${page}`;
	},
	// admin 공지사항 작성
	adminNoticeWrite: () => {
		return '/admin/board';
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

//이메일 인증
export const EmailController = {
	//이메일로 key값 받기
	auth: () => {
		return '/auth';
	},
	//위에서 받은 key값 인증
	authcheck: () => {
		return '/auth/check';
	},
};

//토큰 재발급
export const RefreshTokenController = {
	refresh: () => {
		return '/refresh';
	},
};

//유저 프로필
export const MyPageController = {
	home: () => {
		return '/home';
	},
};

//권한 조회
export const RoleController = {
	role: () => {
		return '/current/role';
	},
};

//자습신청
export const SelfstudyController = {
	//자습신청
	selfStudy: (role: string) => {
		return `/${role}/selfstudy`;
	},
	//자습취소
	cancelStudy: (role: string) => {
		return `/${role}/cancel/selfstudy`;
	},
	//신청조회
	studyLookup: (role: string) => {
		return `/${role}/selfstudy`;
	},
	//반별 신청 조회
	classLookup: (classId: number, role: string) => {
		return `/${role}/selfstudy/${classId}`;
	},
	//현재 신청 현황 수 조회
	countStudy: (role: string) => {
		return `/${role}/selfstudy/count`;
	},
	//자습신청 여부 조회
	studyStatus: (role: string) => {
		return `/${role}/selfstudy/status`;
	},
};

//기상송 신청
export const MusicController = {
	//음악 신청(post) or 조회(get)
	music: (role: string) => {
		return `/${role}/music`;
	},
	todayMusic: (role: string) => {
		return `/${role}/music/current`;
	},
	deleteMusic: (role: string, id: number) => {
		return `/${role}/music/${id}`;
	},
};
