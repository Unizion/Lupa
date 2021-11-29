import React from 'react';
import { render } from 'react-dom';
import App from './js/components/App';
import store from './js/store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'


render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);