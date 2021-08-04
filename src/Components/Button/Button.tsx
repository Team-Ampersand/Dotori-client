import { LoginArrow } from '../../Assets/Svg'
import React from 'react'
import * as S from "./Style"

const Button = () => {
    return (
        <>
            <S.ButtonStyle>
                로그인
                <S.ArrowWrapper>
                    <LoginArrow />
                </S.ArrowWrapper>
            </S.ButtonStyle>
        </>
    )
}

export default Button
