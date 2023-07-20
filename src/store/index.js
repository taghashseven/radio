import {configureStore} from '@reduxjs/toolkit';
import navReducer from './navStore';

const store = configureStore({
    reducer : {
        nav : navReducer
    }
})

export default store;