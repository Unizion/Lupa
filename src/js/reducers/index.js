
import { ADD_ADRESS } from "../constants/action-types";

const initialState = {
	adress:'',
	assets:[],
	nfts:[]
}

function rootReducer(state = initialState, action){
	switch (action.type) {
		case ADD_ADRESS: {
			return {
				...state,
				adress: action.adress
			}
		}
			
		default:
			return state

	}
}


export default rootReducer;