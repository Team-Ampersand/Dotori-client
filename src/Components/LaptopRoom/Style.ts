import styled from 'styled-components';

export const Postioner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 403px;
    background-color: #fff;
    border-radius: 20px;
    label {
        margin: 4.4% 6.5%;
        font-size: 24px;
        font-weight: bold;
        margin-right: auto;
    }
`

export const ScrollWrapper = styled.div`
    max-height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
    padding: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (max-height: 1100px) {
        max-height: 600px;
    }

    @media (max-height: 1000px) {
        max-height: 550px;
    }

    @media (max-height: 950px) {
        max-height: 500px;
    }

    @media (max-height: 900px) {
        max-height: 450px;
    }

    @media (max-height: 850px) {
        max-height: 350px;
    }
    
    &::-webkit-scrollbar {
        display: none;
    }
`