import styled from "styled-components";

export const BreakDownContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const BreakDownWrapper = styled.div`
    width: 70vh;
    height: 95%;
    border: 2px solid rgba(0, 0, 0, 1);
    border-radius: 40px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
`;

export const Category = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    font-size: 20px;
    font-weight: 700;
`;

export const LargeCategoriesWrapper = styled.ul`
    display: grid;
    width: 40%;
    height: 100%;
    border-right: 3px solid #0F4C81;
    margin-left: 2.5vh;
`;

export const LargeCategories = styled.div`
    width: 100%;
    height: 100%;
    color: rgba(185, 185, 185, 1);
    
`;

export const TextWrapper = styled.div`
    cursor: pointer;
`;

export const SmallCategoriesWrapper = styled.ul`
    display: grid;
    width: 50%;
    height: 100%;
    margin-top: -1.9vh;
    margin-left: 2.5vh;
    grid-template-rows: repeat(auto-fit, 6vh);
`;

export const SmallCategories = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    font-size: 16px;
`;

export const DateWrapper = styled.div`
    display: block;
    font-size: 13px;
    width: 100px;
`;