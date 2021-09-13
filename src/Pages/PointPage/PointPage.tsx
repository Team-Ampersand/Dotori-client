import React from "react";
import { MatchType } from "../../Utils/GlobalType";
import PageTemplate from "Pages/Template/PageTemplate";
import Point from "../../Components/Point/Point";

interface PointProps {
	match: MatchType;
}

const PointPage: React.FC<PointProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<Point />
		</PageTemplate>
	);
};

export default PointPage;
