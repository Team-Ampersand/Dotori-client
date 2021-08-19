import styled from "styled-components";

export const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const GradeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input{
        margin-right: 1.33vw;
        margin-left: 1.33vw;
        text-align: center;
        width: 8vw;
        padding: 0;
        
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
`;

export const SelectContainer = styled.div`
    margin-top: 2vh;
    select {
        margin-left: 2vw;
        width: 23.5vw;
        height: 4.5vh;
        border: 2px;
        border-radius: 10px;
        outline: none;
        border: 2px solid #617BE3;
        padding-left: 0.5vw;
    }
    span{
        color: #617BE3;
        font-weight: bold;
    }
`;

export const SigninContainer = styled.div`
    margin-top: 3vh;
    span {
        color: #969696;
    }
    a {
        margin-left: 5px;
        text-decoration: none;
        color: #3A4C98;
    }
`;