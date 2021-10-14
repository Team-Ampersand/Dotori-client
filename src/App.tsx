import React from 'react';
import {
	GlobalStyle,
	Positioner,
	ContentWrapper,
	SidebarWrapper,
} from './Style/GlobalStyle';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { SidebarPage } from './Pages';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<GlobalStyle />
				<Positioner>
					<SidebarWrapper current={window.location.pathname}>
						<SidebarPage />
					</SidebarWrapper>
					<ContentWrapper>
						<Router />
					</ContentWrapper>
				</Positioner>
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default App;
