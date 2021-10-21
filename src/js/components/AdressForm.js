import { React, useState } from 'react';
import { connect } from 'react-redux';
import { addAdress } from "../actions/index";

function mapDispatchToProps(dispatch){
	return {
		addAdress: adress => dispatch(addAdress(adress))
	}
}

let AdressForm = () => {
	const [input, setInput] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();


	}
	const handleChange = (e) => {
		setInput(e.target.value);
		console.log(input)
	}	
	return (
		<div>
		<div>FORM</div>
		<form onSubmit={handleSubmit}>
			<input value={input} type="text" onChange={handleChange} />
			<button type='submit'>Search</button>
		</form>
		</div>
	)

}

export default AdressForm;