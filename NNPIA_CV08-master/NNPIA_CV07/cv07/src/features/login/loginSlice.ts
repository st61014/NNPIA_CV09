import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LoginState {
    value: boolean
}

// Define the initial state using that type
const initialState: LoginState = {
    value: false,
}

export const loginSlice = createSlice({
    name: 'login',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    },
})

export const { setLogin } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.login.value

export const loginReducer = loginSlice.reducer