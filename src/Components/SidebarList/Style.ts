import styled from 'styled-components';

type StyleProps = {
	isMainMenu: boolean;
};

export const MenuWrapper = styled.div<StyleProps>`
	flex: ${(props) => (props.isMainMenu ? 15 : 3)};
	width: calc(100% - 43px);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-left: 43px;
	margin-top: 4vw;

	@media (max-width: 1920px) {
		margin-left: 50px;
	}
	@media (max-width: 1400px) {
		margin-left: 40px;
	}
	@media (max-width: 700px) {
		margin-left: 10px;
	}
`;
