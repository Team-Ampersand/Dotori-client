import { useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { useNavigate } from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';
import { noticeWrite } from '../../Api/notice';
import { useRole } from 'Hooks/useRole';

const NoticeWrite: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [postFile, setPostFile]: any = useState([]);
	const [fileImage, setFileImage]: any = useState([]);
	const navigate = useNavigate();
	const role = useRole();

	const settings = {
		arrows: false,
		dots: true,
	}

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

	const saveFileImage = (e) => {
		if (e.target.files[0]) {
			setPostFile(postFile => [...postFile, e.target.files[0]]);
			setFileImage(fileImage => [...fileImage, URL.createObjectURL(e.target.files[0])]);
		}
	};
	const deleteFileImage = () => {
		fileImage.map((item) => URL.revokeObjectURL(item));
		setPostFile([]);
		setFileImage([]);
		(document.getElementsByName("imgUpload")[0] as HTMLInputElement).value = "";
	};

	const createNotice = async (e) => {
		const res = await noticeWrite(role, title, content, postFile);
		if (title && content === '') {
			return;
		} else {
			navigate('/notice');
		}
		return res;
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
								className="input"
							/>
							<S.ContentInput
								placeholder="내용을 입력해주세요 (1 ~ 5000자)"
								onChange={getContent}
								className="input"
							/>
						</S.InputWrapper>
						<S.ContentWrapper>
							<S.ImgContainer>
								{fileImage[0] !== undefined ?
									(
										<S.Img>
											<S.StyledSlider {...settings}>{
												[...fileImage].map((item, key) => {
													return (
														<img alt="notice" src={item} key={key} />
													)
												})
											}</S.StyledSlider>
										</S.Img>
									) : (
										<div>
											<S.Img>
												<S.LogoImg>
													<I.TextLogo />
													<p>이미지가 선택되지 않았어요</p>
												</S.LogoImg>
											</S.Img>
										</div>
									)
								}
							</S.ImgContainer>
							<S.SelectImgContainer>
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
							</S.SelectImgContainer>
						</S.ContentWrapper>
					</S.ContentContainer>
				</S.Container>
			</S.Positioner>
		</>
	);
};

export default NoticeWrite;
