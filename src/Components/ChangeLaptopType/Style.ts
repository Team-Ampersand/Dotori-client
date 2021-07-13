import styled from 'styled-components';

interface StyleProps {
    isActive ?: boolean
}

export const Postioner = styled.div<StyleProps>`
    display: inline-flex;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    margin-left: 15px;
    padding: 7.5px;
    color: ${props => props.isActive ? '#0F4C81' : '#fff' };
    background-color: ${props => props.isActive ? '#fff' : '#0F4C81'};
    border: ${props => props.isActive ? '2px solid #0F4C81' : 'none'};
    border-radius: 10px;
    height: 30px;
    cursor: pointer;

    
`