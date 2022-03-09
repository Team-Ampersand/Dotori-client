import { useEffect, useState } from 'react';
import * as S from './Style';
import { Prompt, useHistory } from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';
import notice from '../../Api/notice';

const NoticeWrite: React.FC = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [postFile, setPostFile] = useState('');
	const [fileImage, setFileImage] = useState('');

	const getTitle = (e) => {
		setTitle(e.target.value);
	};
	const getContent = (e) => {
		setContent(e.target.value);
	};

	useEffect(() => {
		setPostFile(postFile);
	}, [postFile]);

	const saveFileImage = async (e) => {
		await setPostFile(e.target.files[0]);
		await setFileImage(URL.createObjectURL(e.target.files[0]));
	};
	const deleteFileImage = async () => {
		await URL.revokeObjectURL(fileImage);
		await setPostFile('');
		await setFileImage('');
	};

	const [shouldConfirmState, setShouldConfirmState] = useState(true);
	const confirm = () => {
		setShouldConfirmState(false);
	};

	const history = useHistory();

	const createNotice = async () => {
		await confirm();
		try {
			const role = await localStorage.getItem('role');
			const res = await notice.noticeWrite(role, title, content, postFile);
			await history.push('/notice');
			return res;
		} catch (e: any) {
			if (e.message === 'Error: Request failed with status code 400') {
				alert('제목과 내용을 입력해주세요');
			}
		}
	};

	useBeforeunload((e) => {
		e.preventDefault();
	});

	return (
		<>
			<Prompt
				when={shouldConfirmState}
				message={'주의! 변경사항이 저장되지 않을 수 있어요'}
			/>
			<S.Positioner>
				<S.Container>
					<S.ContentWrapper>
						<div>
							<S.TitleInput
								placeholder="제목을 입력해주세요 (1 ~ 45자)"
								onChange={getTitle}
							/>
							<S.ContentInput
								placeholder="내용을 입력해주세요 (1 ~ 250자)"
								onChange={getContent}
							/>
						</div>
						<S.ImgContainer>
							<div>
								<S.Img>
									{fileImage ? (
										<img alt="notice" src={fileImage} />
									) : (
										<p>이미지가 선택되지 않았어요</p>
									)}
								</S.Img>
								<S.ImgBtnWrapper>
									<input
										id="select-file"
										name="imgUpload"
										type="file"
										accept="image/*"
										onChange={saveFileImage}
									/>
									<label htmlFor="select-file">이미지 선택</label>
									<button onClick={() => deleteFileImage()}>삭제</button>
								</S.ImgBtnWrapper>
							</div>
						</S.ImgContainer>
					</S.ContentWrapper>
					<S.BtnWrapper>
						<S.DeleteBtn onClick={() => history.push('/notice')}>
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
