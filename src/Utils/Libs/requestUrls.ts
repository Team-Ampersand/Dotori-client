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

// 멤버 자습신청 관리
export const selfStudyController = {
	// 자습신청
	apply: () => {
		return '/member/selfstudy';
	},
	// 자습신청
	cancel: () => {
		return '/member/cancel/selfstudy';
	},
};
