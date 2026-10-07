import { createSlice } from '@reduxjs/toolkit'
import { hydrateUserAction, loginUserAction } from './authAction'



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
            state.isLoading = false
        },
        removeUser :(state)=>{
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false
        },
    },

    extraReducers:(builder)=>{
        // loginUserAction
        builder
        .addCase(loginUserAction.pending ,(state,action) =>{
            state.isLoading = true
        })
        .addCase(loginUserAction.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        })
        .addCase(loginUserAction.rejected,(state,action)=>{
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false
        })

        //  hydrateAction
        .addCase(hydrateUserAction.pending,(state,action)=>{
            state.isLoading = true
        })
        .addCase(hydrateUserAction.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        })
        .addCase(hydrateUserAction.rejected,(state,action)=>{
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false
        })
    }
})

export const {addUser,removeUser} = authSclice.actions
export default authSclice.reducer