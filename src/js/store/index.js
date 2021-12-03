import { configureStore } from "@reduxjs/toolkit"

import vaultReducer from './vault'


const store = configureStore({reducer:vaultReducer});

export default store;