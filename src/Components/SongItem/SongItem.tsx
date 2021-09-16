import React from 'react'
import * as S from './Style'

type SongItemObj = {
    thumbnail: string,
    title: string,
    author: string
}

interface SongProps {
    songObj: SongItemObj[];
}

const SongItem: React.FC<SongProps> = ({ songObj }) => {
    return (
        <>
            {songObj.map((item, ix) => (
            <S.Positioner key={`${ix}`}>
                <S.ImgContainer thumbnail={item.thumbnail}/>
                <S.Container>
                    <S.TitleContainer>{item.title}</S.TitleContainer>
                    <S.AuthorContainer>{item.author}</S.AuthorContainer>    
                </S.Container>
            </S.Positioner>
        ))}
        </>
    )
}

export default SongItem
