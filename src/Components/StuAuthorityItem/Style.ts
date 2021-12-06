import styled, { css } from "styled-components";

interface EditProps {
  edit: boolean;
}

interface BtnProps {
  BtnColor: string;
}

export const Container = styled.li`
  width: 95%;
  list-style: none;
  margin: 30px 40px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StuInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StuNumStyle = styled.div`
  font-size: 24px;
  padding-left: 80px;
  width: 120px;
  border-right: 1px solid black;
`;

export const NameStyle = styled.div`
  font-size: 24px;
  padding-left: 80px;
  width: 140px;
  border-right: 1px solid black;
`;

export const AuthorityStyle = styled.div`
  font-size: 20px;
  text-align: center;
  padding-left: 40px;
  width: 100px;
`;

export const EditBtn = styled.button`
  width: 90px;
  height: 45px;
  margin-right: 70px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #0f4c81;

  &:hover {
    border: 2px solid #0f4c81;
    color: #0f4c81;
    background-color: #fff;
  }
`;

export const BtnWrapper = styled.div<EditProps>`
  ${(props) =>
    !props.edit &&
    css`
      display: none;
    `}
  margin-right: 20px;
`;

export const Btn = styled.button<BtnProps>`
  border: 2px solid ${(props) => props.BtnColor};
  border-radius: 10px;
  width: 90px;
  height: 45px;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  margin-left: 20px;
  color: ${(props) => props.BtnColor};
  &:hover {
    background-color: ${(props) => props.BtnColor};
    color: #fff;
  }
`;
