import React from "react";
import * as S from "./Style";
import { PageTemplate } from "..";
import { MatchType } from "../../Utils/GlobalType";
import { SelfstudyTable, Classification } from "../../Components";

interface LaptopProps {
	match: MatchType;
}

const LaptopContainer: React.FC<LaptopProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<S.Positioner>
				<Classification />
				<SelfstudyTable match={match} />
			</S.Positioner>
		</PageTemplate>
	);
};

export default LaptopContainer;
