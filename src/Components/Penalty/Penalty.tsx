import React, {useState, useEffect} from 'react';
import * as S from "./Style";
import StuPenaltyItem from "../StuPenaltyItem/StuPenaltyItem";
import stuInfo from "Api/stuInfo";
import penaltyInfo from "../../Api/penaltyInfo";
import PenaltyGiveItem from 'Components/PenaltyGiveItem/PenaltyGiveItem';
import { EnumType } from 'typescript';
interface studentList {
  id: number;
  stuNum: number;
  memberName: string;
  roles: Array<any>;
}

const Penalty: React.FC = () => {
  const [studentList, setStudentList] = useState<studentList[]>([]);
  const [searchTerm, setSearchTerm]: any = useState("");

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

  let checkItems:Array<string> = [];

  const handleSingleCheck = (checked, id: string) => {
    if (checked) {
      checkItems.push(id);
      console.log(checkItems);
    } else {
      checkItems = checkItems.filter((el) => el !== id)
      console.log(checkItems);
    }
  };

  // eslint-disable-next-line array-callback-return
  const Search = studentList && studentList.filter((val) => {
    if (searchTerm === "") { 
      return (
        // eslint-disable-next-line array-callback-return
        studentList && studentList.map((stu) => {
          <S.BoxContainer>
            <S.CheckBox type="checkbox" onChange={(e) => handleSingleCheck(e.target.checked, String(stu.stuNum))} />
            <StuPenaltyItem
              key={stu.id}
              stuNum={String(stu.stuNum)}
              name={stu.memberName}
              authority={stu.roles[0]}
            />
          </S.BoxContainer>
      })
      )
    }
    else if (val.memberName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) { return val }
  }).map((stu) => {
    return (
      <S.BoxContainer>
        <S.CheckBox type="checkbox" onChange={(e) => handleSingleCheck(e.target.checked, String(stu.stuNum))} />
        <StuPenaltyItem
          key={stu.id}
          stuNum={String(stu.stuNum)}
          name={stu.memberName}
          authority={stu.roles[0]}
        />
      </S.BoxContainer>
    )
  })

  return(
    <S.Positioner>
      <S.BoxContainer>
        <S.SelectBoxWrapper>
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
        </S.SelectBoxWrapper>
        <S.SearchBox>
          <S.Search pattern='\d*' placeholder="이름을 검색해주세요" onChange={(e) => {setSearchTerm(e.target.value)}}/>
          <S.Btn onClick={onSubmit}>검색</S.Btn>
        </S.SearchBox>
        <PenaltyGiveItem stuNum={checkItems} checked={checkItems}/>
      </S.BoxContainer>
      <S.Container>
        <S.AuthorizationBoard>
          {Search}
        </S.AuthorizationBoard>
      </S.Container>
    </S.Positioner>
  );
};

export default Penalty;