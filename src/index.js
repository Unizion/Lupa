import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './js/components/App';
import store from './js/store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import Spinner from './js/components/ui/Spinner';

render(
	<Suspense fallback={<Spinner />}>
	<Provider store={store}>
		
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	</Suspense>,
	document.getElementById("root")
);