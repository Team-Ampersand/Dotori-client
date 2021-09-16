import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    height: 86.5%;
    align-items: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border-radius: 5px;

    div {
        width: 100%;
        min-height: 75px;
    }
`