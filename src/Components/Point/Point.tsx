import React from 'react';
import * as S from './Style';
import { Classification, StuPoint } from 'Components';

const PointDummyData = [
	{
		id: 1,
		stuNum: 2201,
		name: '강산하',
		point: 3,
	},
	{
		id: 2,
		stuNum: 2202,
		name: '강정원',
		point: -5,
	},
	{
		id: 3,
		stuNum: 2203,
		name: '김민지',
		point: 4,
	},
	{
		id: 4,
		stuNum: 2204,
		name: '김유진',
		point: 10,
	},
	{
		id: 5,
		stuNum: 2205,
		name: '김태빈',
		point: -12,
	},
	{
		id: 6,
		stuNum: 2206,
		name: '노경준',
		point: 5,
	},
	{
		id: 7,
		stuNum: 2207,
		name: '박민혁',
		point: 5,
	},
	{
		id: 8,
		stuNum: 2208,
		name: '박선우',
		point: 5,
	},
	{
		id: 8,
		stuNum: 2208,
		name: '박선우',
		point: 5,
	},
	{
		id: 9,
		stuNum: 2209,
		name: '박준서',
		point: 0,
	},
	{
		id: 10,
		stuNum: 2210,
		name: '백다미',
		point: 0,
	},
	{
		id: 11,
		stuNum: 2211,
		name: '서유선',
		point: 0,
	},
	{
		id: 12,
		stuNum: 2212,
		name: '송시현',
		point: 0,
	},
	{
		id: 13,
		stuNum: 2213,
		name: '양하준',
		point: 0,
	},
	{
		id: 14,
		stuNum: 2214,
		name: '이선우',
		point: 0,
	},
	{
		id: 15,
		stuNum: 2215,
		name: '임창규',
		point: 0,
	},
	{
		id: 16,
		stuNum: 2216,
		name: '전지환',
		point: 0,
	},
	{
		id: 17,
		stuNum: 2217,
		name: '정영민',
		point: 0,
	},
	{
		id: 18,
		stuNum: 2218,
		name: '지인호',
		point: 0,
	},
	{
		id: 19,
		stuNum: 2219,
		name: '현채원',
		point: 0,
	},
	{
		id: 20,
		stuNum: 2220,
		name: '한재원',
		point: 0,
	},
];

const Point: React.FC = () => {
	return (
		<S.Positioner>
			<Classification />
			<S.scoreBoard>
				<ul>
					{PointDummyData.map((stu) => (
						<StuPoint
							key={stu.id}
							stuNum={stu.stuNum}
							name={stu.name}
							point={stu.point}
						/>
					))}
				</ul>
			</S.scoreBoard>
		</S.Positioner>
	);
};

export default Point;
