import React, { useState } from "react";
import * as S from "./Style";
import StuAuthorityItem from "Components/StuAuthorityItem/StuAuthorityItem";
import { rolelookup } from "Utils/Libs/roleLookup";
import stuInfo from "Api/stuInfo";

interface studentList {
  id: number;
  stdNum: number;
  username: string;
  roles: Array<any>;
}

const Authorzation: React.FC = () => {
  const [studentList, setStudentList] = useState<studentList[]>([]);

  const getClassStuInfo = async () => {
    const role = await rolelookup();
    return await stuInfo.getClassStuInfo(role, parseInt(stuGrade + stuClass));
  };

  const [stuGrade, setStuGrade] = useState("");
  const [stuClass, setStuClass] = useState("");

  const onSubmit = () => {
    try {
      getClassStuInfo().then((res) => {
        setStudentList(res.data.data);
      });
    } catch (e: any) {
      throw Error(e);
    }
  };

  return (
    <S.Positioner>
      <S.SelectWrapper>
        <S.SelectBox
          onChange={({ target: { value } }) => {
            setStuGrade(value);
          }}
          value={stuGrade}
        >
          <S.Option value="0">선택</S.Option>
          <S.Option value="1">1</S.Option>
          <S.Option value="2">2</S.Option>
          <S.Option value="3">3</S.Option>
        </S.SelectBox>
        <S.Label>학년</S.Label>
        <S.SelectBox
          onChange={({ target: { value } }) => {
            setStuClass(value);
          }}
          value={stuClass}
        >
          <S.Option value="0">선택</S.Option>
          <S.Option value="1">1</S.Option>
          <S.Option value="2">2</S.Option>
          <S.Option value="3">3</S.Option>
          <S.Option value="4">4</S.Option>
        </S.SelectBox>
        <S.Label>반</S.Label>
        <S.Btn onClick={onSubmit}>검색</S.Btn>
      </S.SelectWrapper>
      <S.AuthorizationBoard>
        {studentList &&
          studentList.map((stu) => (
            <StuAuthorityItem
              key={stu.id}
              stuId={stu.id}
              stuNum={String(stu.stdNum)}
              name={stu.username}
              authority={stu.roles[0]}
            />
          ))}
      </S.AuthorizationBoard>
    </S.Positioner>
  );
};

export default Authorzation;
