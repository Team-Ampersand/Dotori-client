import React, { useEffect, useState } from "react";
import * as S from "./Style";
import StuAuthorityItem from "Components/StuAuthorityItem/StuAuthorityItem";
import stuInfo from "Api/stuInfo";

interface studentList {
  id: number;
  stuNum: number;
  memberName: string;
  roles: Array<any>;
}

const Authorzation: React.FC = () => {
  const [studentList, setStudentList] = useState<studentList[]>([]);

  const getStuInfo = async () => {
    const role = await localStorage.getItem("role");
    return await stuInfo.getStuInfo(role);
  };

  const getClassStuInfo = async () => {
    const role = await localStorage.getItem("role");
    return await stuInfo.getClassStuInfo(role, parseInt(stuGrade + stuClass));
  };

  const [stuGrade, setStuGrade] = useState("");
  const [stuClass, setStuClass] = useState("");

  const onSubmit = () => {
    if (parseInt(stuGrade + stuClass) > 0) {
      try {
        getClassStuInfo().then((res) => {
          res && setStudentList(res.data.data);
        });
      } catch (e: any) {
        throw Error(e);
      }
    } else return;
  };

  useEffect(() => {
    try {
      getStuInfo().then((res) => {
        res && setStudentList(res.data.data);
      });
    } catch (e: any) {
      throw Error(e);
    }
  }, []);

  return (
    <S.Positioner>
      <S.SelectWrapper>
        <S.SelectBox
          onChange={({ target: { value } }) => {
            setStuGrade(value);
          }}
          value={stuGrade}
        >
          <S.Option value="" selected disabled hidden>
            선택
          </S.Option>
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
          <S.Option value="" selected disabled hidden>
            선택
          </S.Option>
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
              stuNum={String(stu.stuNum)}
              name={stu.memberName}
              authority={stu.roles[0]}
            />
          ))}
      </S.AuthorizationBoard>
    </S.Positioner>
  );
};

export default Authorzation;
