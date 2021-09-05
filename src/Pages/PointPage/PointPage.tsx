import React from "react";
import { MatchType } from "../../Utils/GlobalType";
import PageTemplate from "Pages/Template/PageTemplate";

interface PointProps {
	match: MatchType;
}

const PointPage: React.FC<PointProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<div />
		</PageTemplate>
	);
};

export default PointPage;
