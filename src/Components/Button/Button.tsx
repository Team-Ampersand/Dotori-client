import { LoginArrow } from '../../Assets/Svg'
import React from 'react'
import * as S from "./Style"

const Button = () => {
    return (
        <>
            <S.ButtonStyle>
                {window.location.pathname === "/signin" ? "로그인" : "회원가입"}
                <S.ArrowWrapper>
                    <LoginArrow />
                </S.ArrowWrapper>
            </S.ButtonStyle>
        </>
    )
}

export default Button
