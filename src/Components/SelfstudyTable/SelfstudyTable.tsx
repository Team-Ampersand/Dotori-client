import React from 'react';
import * as S from './Style';
import { MatchType } from '../../Utils/GlobalType';
import List from './List/List';

interface TableProps {
	match: MatchType;
}

const SelfstudyTable: React.FC<TableProps> = ({ match }) => {
	return (
		<S.Postioner>
			<S.Content>
				<List match={match} />
			</S.Content>
		</S.Postioner>
	);
};

export default SelfstudyTable;
