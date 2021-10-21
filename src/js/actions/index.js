
import { ADD_ADRESS } from "../constants/action-types";

export function addAdress(adress){
	return { type: ADD_ADRESS , adress }
}