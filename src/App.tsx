import React, { Suspense } from 'react';
import { GlobalStyle, Positioner, ContentWrapper } from './Style/GlobalStyle';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { Skelethon } from 'Components';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

if (typeof window !== 'undefined') {
	injectStyle();
}

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<CookiesProvider>
				<BrowserRouter>
					<GlobalStyle />
					<Positioner>
						<ContentWrapper>
							<Suspense fallback={<Skelethon />}>
								<ToastContainer
									position={toast.POSITION.TOP_RIGHT}
									transition={Slide}
									autoClose={1500}
								/>
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
