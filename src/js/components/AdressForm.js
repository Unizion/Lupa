import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { addAdress } from "../actions/index";


let AdressForm = () => {

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
	const handleChange = (e) => {
		setInput(e.target.value);
	}
	return (
		<div>
		<div>FORM</div>
		<form onSubmit={handleSubmit}>
			<input value={input} type="text" onChange={handleChange} />
			<button type='submit'>Search</button>
		</form>
		{ error &&
			<div className="error">Invalid adress !</div>
		}
		</div>
	)
}

export default AdressForm;