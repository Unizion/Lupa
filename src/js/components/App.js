import './App.css';
import { Route,Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Header from './Header'
import Spinner from './ui/Spinner';
import AdressForm from '../pages/AdressForm'

const NotFound = React.lazy(() => import('../pages/NotFound'));
const Vault = React.lazy(() => import('../pages/Vault'));
const CurrencyDetail = React.lazy(() => import('../pages/CurrencyDetail'));

let App = () => (
	<div>
		<Header />
		<main>
			<Suspense fallback = {
				<Spinner />
			} />
			<Routes>
				<Route path="/" element={<AdressForm />}/>
				<Route path="/vault" element={<Vault />} />
				<Route path="/vault/:CurrId" element={<CurrencyDetail />}/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	</div>
)
export default App;
