import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    flex: 1;
    display: flex;

    svg {
        fill: #8B8B8B;
        width: 21px;
        height: 22px;
    }
`

export const LogoutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 26vh;
    cursor: pointer;

    span {
        font-size: 18px;
        margin-left: 13px;
        color: #fc2c2c;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 26px;
`

export const UserWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-height: 900px) {
        justify-content: flex-end;

        svg {
            display: none;
            opacity: 0;
        }

        div {
            margin-right: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            
            .name {
                font-size: 20px;
                font-weight: bold;
            }

            .grade {
                font-size: 18px;
                color: #BBBBBE;
                font-weight: bold;
                margin-left: 14px;
            }
        }
        
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 18px;
        margin-bottom: 0px;

        .name {
            font-size: 20px;
            font-weight: bold;
        }

        .grade {
            font-size: 18px;
            color: #BBBBBE;
            font-weight: bold;
            margin-left: 14px;
        }
    }
`

export const PointWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 15px;

    span {
        margin: 0px 10px;
        font-size: 16px;
        font-weight: bold;
    }

    sub {
        margin-left: 15px;
        font-size: 15px;
        font-weight: bold;
        color: #FE5B5B;
    }
`

export const PointProgress = styled.div`
    position: relative;
    width: 60%;
    height: 4px;
    border-radius: 50px;
    background-color: #EDEDED;
`

export const ActiveProgress = styled.div`
    position: absolute;
    width: 15px;
    height: 4px;
    border-radius: 50px;
    background-color: #FE5B5B;
`

export const Footer = styled.div`
    flex: 4;
    margin: 0px 26px;
    display: flex;
    flex-direction: column;
`

export const Label = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const Policy = styled.div`
    flex: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;


    span {
        color: #222222;
        font-size: 12px;
    }

    p {
        color: #222222;
        font-size: 12px;

        strong {
            color: #217ECE;
            font-weight: 500;
            cursor: pointer;
        }

        a {
            text-decoration: none;
        }
    }
`