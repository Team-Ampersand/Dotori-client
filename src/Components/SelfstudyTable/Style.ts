import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 78%;
    background-color: #fff;
    border-radius: 20px;
`

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    background-color: blue;
    height: 10%;

    div { 
        display: flex;
        flex: 1;
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border-radius: 10px;
    margin-top: 6vh;

    div {
        width: 30vw;
        height: 75px;
    }
`