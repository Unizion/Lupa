import { createSlice } from "@reduxjs/toolkit";

const initialState = {vault:{}};

const vaultSlice = createSlice({
    name:'vault',
    initialState,
    reducers:{
        addWallet(state,action){
            let adress = action.payload;
            state.vault[adress] = {}
        }
    }
})
export const vaultActions = vaultSlice.actions;
export default vaultSlice.reducer;