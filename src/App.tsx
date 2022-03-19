import React, { useEffect } from 'react';
import { GlobalStyle, Positioner, ContentWrapper } from './Style/GlobalStyle';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import Firebase from './Firebase';

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<CookiesProvider>
				<BrowserRouter>
					<GlobalStyle />
					<Positioner>
						<ContentWrapper>
							<Router />
						</ContentWrapper>
					</Positioner>
				</BrowserRouter>
			</CookiesProvider>
		</RecoilRoot>
	);
};

export default App;
