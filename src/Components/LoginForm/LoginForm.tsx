import React from 'react'
import { Input } from '../'
import { DotoriLogo } from 'Assets/Svg'
import * as S from "./Style"
import Button from 'Components/Button/Button'
import { Link } from 'react-router-dom'

const LoginData = [
    {
        name:"아이디",
        type:"text"
    },
    {
        name:"비밀번호",
        type:"password"
    }
]

const LoginForm = () => {
    return (
        <>
            <S.Positioner>
                <S.LogoWrapper>
                    <DotoriLogo />
                </S.LogoWrapper>
                {LoginData.map((item, ix) => <Input item={item} />)}
                <Button />
                <S.Line />
                <S.SaveContainer>
                    <S.CheckBox type="checkbox" />
                    <span>아이디 저장</span>
                </S.SaveContainer>
                <S.FindContainer>
                    <span>비밀번호를 잊으셨나요?</span>
                    <Link to="/password-change">비밀번호 찾기</Link>
                </S.FindContainer>
            </S.Positioner>
        </>
    )
}

export default LoginForm
