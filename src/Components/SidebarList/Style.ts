import styled from 'styled-components';

type StyleProps = {
	isMainMenu: boolean;
};

export const MenuWrapper = styled.div<StyleProps>`
	flex: ${(props) => (props.isMainMenu ? 15 : 3)};
	width: calc(100% - 43px);
	display: flex;
	flex-direction: column;
	margin-left: 43px;
	align-self: center;
	justify-content: flex-start;
	margin-top: 4rem;

	@media screen and (max-width: 700px) {
		margin-left: 10px;
	}
`;
