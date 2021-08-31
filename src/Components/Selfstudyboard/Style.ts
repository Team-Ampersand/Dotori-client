import styled from "styled-components";

type StyleProps = {
    statusColor?: string;
}

export const Positioner = styled.div`
    width: 35%;
    height: 100%;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    margin-left: 1.3vw;
`;

export const StudyHeader = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    h2 {
        font-size: 20px;
    }
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        
        span {
            margin-right: 10px;
            font-size: 18px;
            color: #8B8B8B;
        }
    }
`;

export const StudyContent = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    strong {
        font-size: 18px;
        margin-top: 8vh;
    }
    span{
        font-size: 5em;
        font-weight: bold;
        margin-top: 11vh;
    }
`;

export const PointProgress = styled.div`
    margin-top: 5vh;
    position: relative;
    width: 60%;
    height: 9px;
    border-radius: 20px;
    background-color: #EDEDED;
`

export const ActiveProgress = styled.div<StyleProps>`
    position: absolute;
    width: 15px;
    height: 9px;
    border-radius: 20px;
    background-color: ${(props) => props.statusColor};
`

export const StudyButton = styled.button`
    width: 12vw;
    height: 7vh;
    border: none;
    background-color: #617BE3;
    color: #fff;
    border-radius: 10px;
    margin-top: 12.5vh;
    font-size: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;