import React from 'react';
import * as S from './Style';

interface NameSearchProps {
	onSearch: () => void;
	setStuName: any;
	handleKeyPress: (e: any) => void;
}

const NameSearch: React.FC<NameSearchProps> = ({
	onSearch,
	setStuName,
	handleKeyPress,
}) => {
	return (
		<S.SearchBox>
			<S.Search
				pattern="\d*"
				placeholder="이름을 검색해주세요"
				onChange={(e) => {
					setStuName(e.target.value);
				}}
				onKeyPress={handleKeyPress}
			/>
			<S.Btn onClick={onSearch}>검색</S.Btn>
		</S.SearchBox>
	);
};

export default NameSearch;
