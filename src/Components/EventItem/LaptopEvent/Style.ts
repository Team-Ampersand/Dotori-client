import styled from 'styled-components';

interface StyleProps {
    laptopObj: {
        laptopRoom: string,
        laptopSeat: string
    }
}

export const Postioner = styled.div<StyleProps>`
    width: 100%;
    height: 90%;
    border-radius: 20px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
    display: flex;
    ${props => props.laptopObj ? 
    `background-image: linear-gradient(63deg, #217ece 21%, #9242dd 76%);
     color: #fff;`:
    `background-color: #ededed;
     color: #000;`
    }
`

export const ContentWrapper = styled.div`
    padding: 12px 21px;
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 16px;
    }

    time {
        font-size: 12px;
        font-weight: lighter;
    }
`

export const Content = styled.div`
    flex: 3;
    display: flex;
    align-items: center;

    span {
        font-size: 20px;
        font-weight: bold;
    }
`