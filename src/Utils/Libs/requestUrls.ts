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

export const MyPageController = {
	home: () => {
		return '/home';
	},
};
