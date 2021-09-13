import React, { useState } from "react";
import * as S from "./Style";
import { Prompt, useHistory } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";

interface NoticeWriteProps {
	board_key: number;
	authorColor: string;
	writeMode: string;
}

const NoticeWrite: React.FC<NoticeWriteProps> = ({
	board_key,
	authorColor,
	writeMode,
}) => {
	const [state, setState] = useState("");
	const getContent = (e) => {
		setState(e.target.value);
	};

	const [shouldConfirmState, setShouldConfirmState] = useState(true);
	const confirm = () => {
		setShouldConfirmState(false);
	};

	const history = useHistory();

	const createNotice = async () => {
		await confirm();
		await history.push("/notice");
		console.log(state);
	};

	useBeforeunload((e) => {
		e.preventDefault();
	});

	return (
		<>
			<Prompt
				when={shouldConfirmState}
				message={"주의! 변경사항이 저장되지 않을 수 있습니다."}
			/>
			<S.Positioner>
				<S.Container>
					<S.TitleInput placeholder="제목을 입력해주세요.." />
					<S.ContentInput
						placeholder="내용을 입력해주세요.."
						onChange={getContent}
					/>
					<S.BtnWrapper>
						<S.DeleteBtn onClick={() => history.push("/notice")}>
							취소
						</S.DeleteBtn>
						<S.Btn onClick={createNotice}>생성</S.Btn>
					</S.BtnWrapper>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeWrite;
