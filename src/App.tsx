import React, { Suspense } from 'react';
import { GlobalStyle, Positioner, ContentWrapper } from './Style/GlobalStyle';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<CookiesProvider>
				<BrowserRouter>
					<GlobalStyle />
					<Positioner>
						<ContentWrapper>
							<Suspense fallback={<div />}>
								<Router />
							</Suspense>
						</ContentWrapper>
					</Positioner>
				</BrowserRouter>
			</CookiesProvider>
		</RecoilRoot>
	);
};

export default App;
