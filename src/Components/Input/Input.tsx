import React from 'react'
import * as S from "./Style"

const Input = ({ item }) => {
    return (
        <S.Positioner>
            <S.InputStyle placeholder={item.name} type={item.type} displayed={item.id}/>
        </S.Positioner>
    )
}

export default Input
