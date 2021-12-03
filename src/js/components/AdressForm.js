import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { vaultActions } from '../store/vault';

const AdressForm = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const [input, setInput] = useState('');
	const [error, setError] = useState('');
	const state = useSelector(state => state);
	const handleSubmit = (e) => {
		e.preventDefault();
		const testregex = /^[0-9a-zA-Z]+$/;
		if(input.length === 42 && testregex.test(input) && input.split('x')[0] === '0' && input.split('x').length === 2){
			if(state.vault[input] === undefined){
				dispatch(vaultActions.addWallet(input))
				navigate('/vault');
			} else {
				setError('Already linked !')
			}
		} else {
			setError('Invalid adress !');
		}
	}
	return (
		<div>
		<div>FORM</div>
		<form onSubmit={handleSubmit}>
			<input value={input} type="text" onChange={event => setInput(event.target.value)} />
			<button type='submit'>Search</button>
		</form>
		{ (error !==  '') &&
			<div className="error">{error}</div>
		}
		</div>
	)
}

export default AdressForm;