import './App.css';
import { Route,Routes } from 'react-router-dom';
import React from 'react';

import Header from './Header'
import Entrance from '../pages/Entrance';

const NotFound = React.lazy(() => import('../pages/NotFound'));
const Vault = React.lazy(() => import('../pages/Vault'));
const CurrencyDetail = React.lazy(() => import('../pages/CurrencyDetail'));

let App = () => (
	<div>
		<Header />
		<main>
			<Routes>
				<Route path="/" element={<Entrance />}/>
				<Route path="/vault" element={<Vault />} />
				<Route path="/vault/:CurrId" element={<CurrencyDetail />}/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	</div>
)
export default App;
