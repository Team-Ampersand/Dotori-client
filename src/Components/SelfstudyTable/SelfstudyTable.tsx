import React from 'react';
import * as S from './Style';
import List from './List/List';

const SelfstudyTable: React.FC = () => {
	return (
		<S.Postioner>
			<S.Content>
				<List />
			</S.Content>
		</S.Postioner>
	);
};

export default SelfstudyTable;
