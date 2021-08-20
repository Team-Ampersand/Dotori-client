import styled from 'styled-components';

interface StyleProps {
  isSelf?: boolean;
  statusColor?: string;
}

export const Postioner = styled.div`
  display: flex;
  width: 340px;
  min-height: 150px;
  border-radius: 15px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  transition: all 0.15s ease-in;
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 5.8%;

  &:hover {
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.16);
  }
`

export const LeftDivision = styled.div<StyleProps>`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px;

  header {
    display: flex;
    align-items: center;

    .circle {
      width: 9px;
      height: 9px;
      background-color: ${props => props.statusColor};
      border-radius: 50%;
      margin-right: 5px;
    }

    span {
      font-weight: bold;
      font-size: 12px;
      color: ${props => props.statusColor};
    }

  }

  .content {
    display: flex;

    h2 {
      line-height: 36px;
    }

  }

  footer {
    display: flex;

    span {
      color: #707070;
      strong {
        color: ${props => props.statusColor};
        margin-right: 2px;
      }

    }
  }
`

export const RightDivision = styled.div`
  flex: 1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 14px;
  font-size: 11px;

`

export const SimpleRoom = styled.div<StyleProps>`
    width: 32px;
    height: ${props => props.isSelf ? '32px' : '15px'};
    background-color: ${props => props.statusColor ? props.statusColor : '#EDEDED'};
    margin-bottom: ${props => props.isSelf ? '10px' : '3px'};
    display: flex;
    font-weight: bold;
    align-items: center;
    color: ${props => props.statusColor ? '#fff' : '#8B8B8B'};
    justify-content: center;
    border-radius: 2px;
`