import React from 'react';
import * as S from './Style';
import Classification from '../../Components/Classification/Classification';
import StuAuthorityItem from 'Components/StuAuthorityItem/StuAuthorityItem';

const StuInfoDummyData = [
	{
		id: 1,
		stuNum: 2201,
		name: '강산하',
		authority: '학생',
	},
	{
		id: 2,
		stuNum: 2202,
		name: '강정원',
		authority: '학생',
	},
	{
		id: 3,
		stuNum: 2203,
		name: '김민지',
		authority: '학생',
	},
	{
		id: 4,
		stuNum: 2204,
		name: '김유진',
		authority: '자치위원',
	},
	{
		id: 5,
		stuNum: 2205,
		name: '김태빈',
		authority: '학생',
	},
	{
		id: 6,
		stuNum: 2206,
		name: '노경준',
		authority: '자치위원',
	},
	{
		id: 7,
		stuNum: 2207,
		name: '박민혁',
		authority: '학생',
	},
	{
		id: 8,
		stuNum: 2208,
		name: '박선우',
		authority: '학생',
	},
	{
		id: 8,
		stuNum: 2208,
		name: '박선우',
		authority: '학생',
	},
	{
		id: 9,
		stuNum: 2209,
		name: '박준서',
		authority: '학생',
	},
	{
		id: 10,
		stuNum: 2210,
		name: '백다미',
		authority: '학생',
	},
	{
		id: 11,
		stuNum: 2211,
		name: '서유선',
		authority: '학생',
	},
	{
		id: 12,
		stuNum: 2212,
		name: '송시현',
		authority: '학생',
	},
	{
		id: 13,
		stuNum: 2213,
		name: '양하준',
		authority: '학생',
	},
	{
		id: 14,
		stuNum: 2214,
		name: '이선우',
		authority: '학생',
	},
	{
		id: 15,
		stuNum: 2215,
		name: '임창규',
		authority: '자치위원',
	},
	{
		id: 16,
		stuNum: 2216,
		name: '전지환',
		authority: '학생',
	},
	{
		id: 17,
		stuNum: 2217,
		name: '정영민',
		authority: '학생',
	},
	{
		id: 18,
		stuNum: 2218,
		name: '지인호',
		authority: '학생',
	},
	{
		id: 19,
		stuNum: 2219,
		name: '현채원',
		authority: '학생',
	},
	{
		id: 20,
		stuNum: 2220,
		name: '한재원',
		authority: '학생',
	},
];

const Authorzation: React.FC = () => {
	return (
		<S.Positioner>
			<Classification />
			<S.AuthorizationBoard>
				{StuInfoDummyData.map((stu) => (
					<StuAuthorityItem
						key={stu.id}
						stuNum={stu.stuNum}
						name={stu.name}
						authority={stu.authority}
					/>
				))}
			</S.AuthorizationBoard>
		</S.Positioner>
	);
};

export default Authorzation;
