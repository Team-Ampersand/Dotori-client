import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { Link } from 'react-router-dom';

interface NoticeWriteProps {
	board_key: number;
	authorColor: string;
}

const NoticeWrite: React.FC<NoticeWriteProps> = ({
	board_key,
	authorColor,
}) => {
	const [state, setState] = useState('');
	const getValue = (e) => {
		setState(e.target.value);
	};
	const cancleCreate = (e) => {
		// closeView(e);
	};
	const createNotice = (e) => {
		// closeView(e);
	};

	useEffect(() => {
		window.onbeforeunload = confirmExit;
		function confirmExit() {
			return 'show warning';
		}
	}, []);

	return (
		<>
			<S.Positioner>
				<S.Container>
					<S.TitleInput placeholder="제목을 입력해주세요.." />
					<S.ContentInput
						placeholder="내용을 입력해주세요.."
						onChange={getValue}
					/>
					<S.BtnWrapper>
						<Link to={'/notice'}>
							<S.DeleteBtn onClick={cancleCreate}>취소</S.DeleteBtn>
						</Link>
						<Link to={'/notice'}>
							<S.Btn onClick={createNotice}>생성</S.Btn>
						</Link>
					</S.BtnWrapper>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeWrite;
