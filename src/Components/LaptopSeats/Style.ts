import styled from 'styled-components';

export const Postioner = styled.div`
    height: calc(100% - 60px);
    width: calc(100% - 60px);
    border-radius: 20px;
    background-color: #fff;
    margin-left: 30px;
    padding: 30px;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .LeftHeader {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-bottom: auto;

        h2 {
            font-size: 24px;
        }

        span {
            margin-top: 3px;
            font-size: 16px;
        }
    }

    .RightHeader {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: 1;

        .label {
            width: 20%;
            margin-top: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
        
            span {
                font-size: 12px;
                margin-left: 7px;
            }
        }
        
        .notUsed {
            background-color: #F1F8FF;
            width: 20px;
            height: 20px;
        }

        .useAble {
            background-color: #0F4C81;
            width: 20px;
            height: 20px;
        }

        .selected {
            height: 20px;
            width: 20px;
            background-color: #0B2B47;
        }
    }
`

export const GridWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 84px);
`

export const GridContent = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 54px);
    grid-template-columns: repeat(6, 54px);
    row-gap: 34px;
    column-gap: 36px;

    #2, #8, #14, #20 {
        row-gap: 100px;
    }
`; 