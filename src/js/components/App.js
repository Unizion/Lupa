import './App.css';
import AdressForm from '../pages/AdressForm'
import Vault from '../pages/Vault'
import CurrencyDetail from '../pages/CurrencyDetail'
import { Route,Switch } from 'react-router-dom';
import Header from './Header'


let App = () => (
	<div>
		<Header />
		<main>
			<Switch>
				<Route path="/" exact>
					<h2>Adress :</h2>
						<AdressForm />
				</Route>
				<Route path="/vault" exact>
					<Vault />
				</Route>
				<Route path="/vault/:CurrId">
					<CurrencyDetail />
				</Route>
			</Switch>
		</main>
	</div>
)
export default App;
