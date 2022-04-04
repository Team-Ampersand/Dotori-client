import { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { useNavigate } from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';
import { noticeWrite } from '../../Api/notice';
import { useRole } from 'Hooks/useRole';

const NoticeWrite: React.FC = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [postFile, setPostFile] = useState('');
	const [fileImage, setFileImage] = useState('');
	const navigate = useNavigate();
	const role = useRole();

	const returnAuthorValue = (authorType: string) => {
		switch (authorType) {
			case 'admin':
				return '사감선생님';
			case 'councillor':
				return '자치위원회';
			case 'developer':
				return '도토리';
		}
	};

	const getTitle = (e) => {
		setTitle(e.target.value);
	};
	const getContent = (e) => {
		setContent(e.target.value);
	};

	useEffect(() => {
		setPostFile(postFile);
	}, [postFile]);

	const saveFileImage = (e) => {
		setPostFile(e.target.files[0]);
		setFileImage(URL.createObjectURL(e.target.files[0]));
	};
	const deleteFileImage = () => {
		URL.revokeObjectURL(fileImage);
		setPostFile('');
		setFileImage('');
	};

	const [shouldConfirmState, setShouldConfirmState] = useState(true);
	const confirm = () => {
		setShouldConfirmState(false);
	};

	const createNotice = async () => {
		confirm();
		try {
			const res = await noticeWrite(role, title, content, postFile);
			navigate('/notice');
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
			<S.Positioner>
				<S.Container>
					<S.BtnWrapper>
						<S.DeleteBtn onClick={() => navigate('/notice')}>취소</S.DeleteBtn>
						<S.Btn onClick={createNotice}>작성하기</S.Btn>
					</S.BtnWrapper>
					<S.ContentContainer>
						<S.InputWrapper>
							<S.TitleInput
								placeholder="제목을 입력해주세요 (1 ~ 45자)"
								onChange={getTitle}
							/>
							<S.ContentInput
								placeholder="내용을 입력해주세요 (1 ~ 250자)"
								onChange={getContent}
							/>
						</S.InputWrapper>
						<S.ContentWrapper>
							<S.ImgContainer>
								<div>
									<S.Img>
										{fileImage ? (
											<img alt="notice" src={fileImage} />
										) : (
											<S.LogoImg>
												<I.TextLogo />
												<p>이미지가 선택되지 않았어요</p>
											</S.LogoImg>
										)}
									</S.Img>
								</div>
							</S.ImgContainer>
							<S.ImgBtnWrapper>
								<input
									id="select-file"
									name="imgUpload"
									type="file"
									accept="image/*"
									onChange={saveFileImage}
								/>
								<label htmlFor="select-file">이미지 선택</label>
								<button onClick={() => deleteFileImage()}>이미지 삭제</button>
							</S.ImgBtnWrapper>
							<S.AuthorContainer>
								<S.AuthorWrapper>
									작성자 : {returnAuthorValue(role)}
								</S.AuthorWrapper>
							</S.AuthorContainer>
						</S.ContentWrapper>
					</S.ContentContainer>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeWrite;
