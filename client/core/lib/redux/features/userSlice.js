import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated') : false,
    isLoggedIn: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false,
    userToken: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkAuth: (state) => {
            state.isAuthenticated = true
        },
        loggedin: (state, action) => {
            state.isLoggedIn = true
            state.isAuthenticated = true
            state.userToken = action.payload || ''
            localStorage.setItem('token', action.payload)
            localStorage.setItem('isLogin', true)
            localStorage.setItem('isAuthenticated', true)
        },
        loggedout: (state) => {
            state.isLoggedIn = false
            state.isAuthenticated = false
            state.userToken = ''
            localStorage.setItem('isLogin', false)
            localStorage.setItem('isAuthenticated', false)
        }
    }
})

export default authSlice.reducer
export const { checkAuth, loggedin, loggedout } = authSlice.actions