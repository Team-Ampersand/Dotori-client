import { DotoriLogo } from 'Assets/Svg'
import React from 'react'
import { Input, Button } from "../"
import * as S from "./Style"

const PasswordForm: React.FC = () => {
    return (
        <S.Positioner>
            <DotoriLogo />
            <Input item={{id:false,name:"이메일을 입력하세요",type:"text"}} />
            <S.QuestionContainer>
                <span>당신의 어렸을 때 별명은?</span>
                <Input item={{name:"질문에 대한 답을 입력해주세요", type:"text"}}/>
            </S.QuestionContainer>
            <Button />
        </S.Positioner>
    )
}

export default PasswordForm
