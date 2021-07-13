import styled from 'styled-components';

export const UserProfile = styled.div`
    display: flex;
    height: 100%;
    min-width: 403px;
    background-color: #fff;
    border-radius: 20px;
`

export const BoardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, calc(50% - 18px));
    grid-template-columns: repeat(2, 1fr);
    background-color: yellow;
    margin-left: 30px;
    row-gap: 34px;
    column-gap: 36px;
`
