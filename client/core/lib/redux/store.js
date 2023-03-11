import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/userSlice'

const store = configureStore({
    reducer: {
        user: authSlice
    }
})

export default store