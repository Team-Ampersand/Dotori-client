import styled from 'styled-components';

export const Postioner = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
        label {
            margin: 3.5% 6.5%;
            margin-right: auto;
            font-weight: bold;
            font-size: 30px;
        }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left:1%;
    background-color: #ffffff;

    @media (max-height: 950px) {
        max-height: 500px;
    }
    @media (max-height: 850px) {
        max-height: 400px;
    }
    @media (max-height: 760px) {
        max-height: 350px;
    }

    p {
        margin-left: 35px;
        margin-top: 4%;
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;

        @media (max-height: 950px) {
            margin-top: 3%;
            margin-bottom: 13px;
        }
        @media (max-height: 850px) {
            margin-top: 2%;
            margin-bottom: 10px;
        }
        @media (max-height: 760px) {
            margin-top: 1%;
        }
    }
    input {
        margin-left: 4%;
        width: 90%;
        height: 65px;
        font-size: 20px;
        border: 3px solid #B0CBFF;
        box-sizing: border-box;
        border-radius: 8px;
    }
    button {
        margin-top: 50px;
        margin-left: 291px;
        margin-right: 310px;
        width: 180px;
        height: 70px;
        border: 0;
        outline: 0;
        align-items: center;
        background: #617BE3;
        border-radius: 10px;
        color: white;

        @media (max-height: 950px) {
            margin-left: 271px;
            margin-right: 290px;
            margin-top: 40px;
        }
        @media (max-height: 850px) {
            margin-left: 251px;
            margin-right: 270px;
            margin-top: 30px;
        }
        @media (max-height: 760px) {
            margin-left: 231px;
            margin-right: 250px;
            margin-top: 25px;
        }
    }
    button:hover {
        background-color: #4D6ADB;
    }
`;