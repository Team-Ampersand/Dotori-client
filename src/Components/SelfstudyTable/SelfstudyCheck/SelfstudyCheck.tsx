import React from 'react';
import * as S from './Style';
import { studyCheck } from 'Api/selfStudy';
import { useSetRecoilState } from 'recoil';
import { list } from 'Atoms';

interface CheckProps {
	id: string;
	role: string;
	state: boolean;
	returnUserObj: any;
}
const SelfstudyCheck: React.FC<CheckProps> = ({
	id,
	role,
	state,
	returnUserObj,
}) => {
	const setUserList = useSetRecoilState(list);

	const studyChecks = async (check, role, memberId) => {
		await studyCheck(role, memberId, check);
		returnUserObj(role).then((res) => {
			setUserList(res?.data.data);
		});
	};

	return (
		<>
			<S.Checkbox
				type="checkbox"
				onClick={() => {
					studyChecks(!state, role, id);
				}}
				checked={state ? true : false}
			/>
		</>
	);
};

export default SelfstudyCheck;
