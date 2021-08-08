import styled from "styled-components";

export const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Line = styled.div`
    margin-top: 2vh;
    width: 30vw;
    border-bottom: 1px solid #969696;
`;

export const CheckBox = styled.input`
    margin-right: 1vh;
    width: 20px;
    height: 20px;
`;

export const SaveContainer = styled.div`
    margin-top: 1vh;
    display: flex;
    span {
        margin-top: 0.5vh;
        color: #969696;
    }
`;

export const FindContainer = styled.div`
    margin-top: 1vh;
    span {
        color: #969696;
    }
    a {
        margin-left: 5px;
        text-decoration: none;
        color: #3A4C98;
    }
`;