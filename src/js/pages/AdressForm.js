import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdressForm = () => {

	const dispatch = useDispatch()

	const addAdress = () => {
		dispatch({
			type: 'ADD_ADRESS',
			adress: input
		})
	}
	const [input, setInput] = useState('');
	const [error, setError] = useState(false);
	const adress = useSelector(state => state);
	const handleSubmit = (e) => {
		e.preventDefault();
		let testregex = /^[0-9a-zA-Z]+$/;
		if(input.length === 42 && testregex.test(input) && input.split('x')[0] === '0' && input.split('x').length === 2){
			addAdress(input);
			console.log(adress);
		} else {
			setError(true);
			console.log(error);
		}
	}
	return (
		<div>
		<div>FORM</div>
		<form onSubmit={handleSubmit}>
			<input value={input} type="text" onChange={event => setInput(event.target.value)} />
			<button type='submit'>Search</button>
		</form>
		{ error &&
			<div className="error">Invalid adress !</div>
		}
		</div>
	)
}

export default AdressForm;