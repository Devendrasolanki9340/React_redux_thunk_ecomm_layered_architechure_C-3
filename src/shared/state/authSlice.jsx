import { createSlice } from '@reduxjs/toolkit'



const authSclice = createSlice({
    name:"auth",
    initialState:{
    user:null,
    isAuthenticated :false,
    isLoading : true,
    },
    reducers :{
        addUser :(state ,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
        },
        removeUser :(state)=>{
            state.user = null
            state.isAuthenticated = false
        },
    },
})

export const {addUser,removeUser} = authSclice.actions
export default authSclice.reducer