import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";



export const loginUserAction = createAsyncThunk("auth/login", async (credentials, thunkApi)=>{
     try {
           let res = await api.post("/auth/login", credentials)
            toast.success("User loggedIn")
           localStorage.setItem('accessToken',res.data.accessToken)
           return res.data
           
       } catch (error) {
        toast.error("login failed")
        return thunkApi.rejectWithValue("login failed")
       }
})

export const hydrateUserAction = createAsyncThunk(
    "/auth/hydrate",
    async(_, thunkApi) =>{
          let token = localStorage.getItem("accessToken")

    if (!token) {
        return thunkApi.rejectWithValue("No access token")
    }

    try {
        let res = await api.get("/auth/me",{
            headers: {
    Authorization: `Bearer ${token}`, 
  }, 
        })
        return res.data
        
    } catch (error) {
        toast.error("Unauthorized user")
        localStorage.removeItem("accessToken")
        return thunkApi.rejectWithValue("Unauthorized user")
    }
    }
)