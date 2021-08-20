import styled from 'styled-components';

export const Postioner = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, calc(50% - 18px));
    grid-template-columns: repeat(2, 1fr);
    margin-left: 30px;
    row-gap: 34px;
    column-gap: 36px;
`