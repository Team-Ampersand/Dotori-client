import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #CCCCCC;
    border-radius: 20px;
`

export const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-left: 31px;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: bold;
    }

    span {
        font-size: 20px;
        line-height: 32px;
    }
`

export const IlustWrapper = styled.div`
    display: flex;
    width: 200px;
    height: 180px;
    justify-content: flex-end;
    margin-right: 35px;
    position: relative;

    svg {
        position: absolute;
        width: 200px;
        height: 180px;
        top: -50px;
    }
`