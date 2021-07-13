import styled from 'styled-components';

interface StyleProps {
    rent: boolean
}

export const Postioner = styled.div<StyleProps>`
    width: 100%;
    height: 100%;
    display: flex;
    background-image: ${props => props.rent ? `linear-gradient(82deg, #217ece 8%, #7926c7 95%)` : null};
    background-color: #CCCCCC;
    color: ${props => props.rent ? `#fff` : `#000`};
    border-radius: 20px;
`

export const RentWrapper = styled.div`
    display: flex;

    span {
        margin-top: auto;
        font-size: 18px;
        margin-left: 10px;
        color: #BBBBBE;
        text-decoration: underline;
        cursor: pointer;
    }
`