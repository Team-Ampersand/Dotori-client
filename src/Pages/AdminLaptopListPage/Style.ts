import styled from 'styled-components';

interface StyledProps {
    isActive?: boolean
}

export const Postioner = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;

        span {
            font-size: 24px;
            font-weight: bold;
        }
    }

    .center {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-size: 20px;
    }

    .right {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        color: #0f4c81;
        font-size: 18px;
    }
`

export const ViewBtnWrapper = styled.div`
    display: flex;
    margin-top: 4px;
`

export const SelectUser = styled.div<StyledProps>`
    background-color: ${props => props.isActive ? "#0f4c81" : "#fff"};
    border-radius: 10px;
    padding: 5px 7.5px;
    color: ${props => props.isActive ? "#fff" : "#0f4c81"};;
    border: ${props => props.isActive ? "none" : "1px solid #0f4c81"};;
    margin-right: 5px;
    cursor: pointer;

    span {
        font-size: 16px !important;
    }

    small {
        margin-left: 2.5px;
    }   
`

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    div { 
        display: flex;
        flex: 1;
        border: 1px solid black;
    }
`

export const Content = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    height: 100%;
    align-items: center;
    -ms-overflow-style: none;
    scrollbar-width: none;

    div {
        width: 100%;
        min-height: 75px;
        border: 1px solid black;
    }
`