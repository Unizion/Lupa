
import { ADD_ADRESS } from "../constants/action-types";

const initialState = {
	adress:'',
	assets:{},
	nfts:{}
}

function rootReducer(state = initialState, action){
	if(action.type = ADD_ADRESS) {
		return {adress: action.adress}
	}
	return state;
}


export default rootReducer;