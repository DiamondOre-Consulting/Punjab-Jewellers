import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosinstance";

const initialState = {
    user : {},
    isLoggedIn : localStorage.getItem("isLoggedIn") === "true" ? true : false,
}

export const Login = createAsyncThunk('admin/signin' , async(data) =>{
    try{
        
        const response = await toast.promise(
            axiosInstance.post('/admin/signin' , data),
            {
                loading : "login.....",
                success : (res)=> res?.message,
                error : (res)=> res?.error
            }
        )

        return response.data
    }
    catch(err){
        console.log(err)
    }
} )

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder
        .addCase(Login.fulfilled , (state , action)=>{
            state.user = action?.payload?.user
            state.isLoggedIn = true
        })
    }
})

export default authSlice.reducer