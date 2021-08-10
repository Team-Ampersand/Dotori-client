import React from 'react'
import { DotoriLogo } from '../../Assets/Svg'
import * as S from "./Style"
import { Input, Button } from '../'
import { Link } from 'react-router-dom'

const SignupData = [
    {
        name:"이름을 입력하세요.",
        type:"text"
    },
    {
        name:"이메일을 입력하세요.",
        type:"text"
    },
    {
        name:"비밀번호를 입력하세요.",
        type:"password"
    },
]
const GradeData = [
    {
        name:"학년",
        type:"number"
    },
    {
        name:"반",
        type:"number"
    },
    {
        name:"번호",
        type:"number"
    },
]

const SignupForm = () => {
    return (
        <S.Positioner>
            <DotoriLogo />
            <S.GradeWrapper>
                {GradeData.map((item, ix) => <Input item={item} />)}
            </S.GradeWrapper>
            {SignupData.map((item, ix) => <Input item={item} />)}
            <S.SelectContainer>
                <span>당신은?</span>
                <select>
                    <option>학생</option>
                    <option>기숙사 자치위원회</option>
                    <option>사감 선생님</option>
                </select>
            </S.SelectContainer>
            <Button />
            <S.SigninContainer>
                <span>이미 계정이 있으신가요?</span>
                <Link to="/signin">로그인</Link>
            </S.SigninContainer>
        </S.Positioner>
    )
}

export default SignupForm
