import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../Redux/Slices/AdminAuthSlice'

export const store = configureStore({
    reducer:{
        auth : authSlice
        
    }
})