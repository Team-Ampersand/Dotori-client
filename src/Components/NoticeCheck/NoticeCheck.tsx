import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import { useNavigate, useParams } from 'react-router-dom';
import { useRole } from 'Hooks/useRole';
import { getNoticeItem } from 'Api/notice';

const NoticePage: React.FC = () => {
    const {board_key} = useParams();
    
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
    const [imgUrl, setImgUrl] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [roles, setRoles] = useState<string>('');
    const role = useRole();
    const navigate = useNavigate();

	const GetNoticeItem = async (boardId) => {
		return getNoticeItem(role, boardId);
    };
    const returnAuthorValue = (authorType: string) => {
        switch (authorType) {
            case 'ROLE_ADMIN':
                return '사감선생님';
            case 'ROLE_COUNCILLOR':
                return '자치위원회';
            case 'ROLE_DEVELOPER':
                return '도토리';
        }
};

	useEffect(() => {
		GetNoticeItem(board_key)
            .then((res) => res?.data.data)
			.then((res) => {
                console.log(res)
				setTitle(res.title);
                setContent(res.content);
                setDate(res.createdDate);
                setRoles(res.roles);
				// setUpdateTitle(res.title);
				// setUpdateContent(res.content);
            	setImgUrl(res.url);
			});
    }, []);    
    
	return (
		<S.Positioner>
            <S.Container>
                <S.HeaderWrapper>
                    <S.Header>
                        <S.TitleWrapper>{title}</S.TitleWrapper>
                        <S.DateWrapper>{date.substr(0, 10)}</S.DateWrapper>
                    </S.Header>
                    <S.CancelWrapper><I.Cancel onClick={() => navigate('/notice')}/></S.CancelWrapper>
                </S.HeaderWrapper>
                <S.ContentWrapper>
                    <S.TextWrapper>{content}</S.TextWrapper>
                    {imgUrl && (
                        <S.ImgWrapper alt="notice" src={imgUrl}/>
                    )}
                </S.ContentWrapper>
                <S.Footer>작성자 : {returnAuthorValue(roles[0])}</S.Footer>
            </S.Container>
		</S.Positioner>
	);
};

export default NoticePage;
