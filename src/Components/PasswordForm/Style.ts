import styled from "styled-components";

export const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const QuestionContainer = styled.div`
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    span{
        font-size: 1.1rem;
        margin: 0 auto;
        color: #617BE3;
        font-weight: bold;
    }
    input {
        margin-top: 2vh;
    }
`;