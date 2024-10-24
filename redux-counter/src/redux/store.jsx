import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';


export const store = configureStore({
    reducer:{
        count : counterReducer
    }
});