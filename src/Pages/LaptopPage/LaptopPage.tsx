import React from "react";
import { PageTemplate } from "..";
import { MatchType } from "../../Utils/GlobalType";
import { SelfstudyTable } from "../../Components";

interface LaptopProps {
	match: MatchType;
}

const LaptopContainer: React.FC<LaptopProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<SelfstudyTable match={match} />
		</PageTemplate>
	);
};

export default LaptopContainer;
