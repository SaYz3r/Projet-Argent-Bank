import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isLoggedIn: false,
    },
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload
            state.isLoggedIn = true
        },
        logout(state) {
            state.token = null
            state.isLoggedIn = false
        },
    },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
