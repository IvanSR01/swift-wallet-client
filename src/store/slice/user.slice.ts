import { IUser } from '@/shared/interfaces/user.interface'
import { createSlice } from '@reduxjs/toolkit'

type TypeStoreUser = {
	user: IUser | null
}

const initialState: TypeStoreUser = {
	user: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
		},
	},
})


export const { setUser } = userSlice.actions

export default userSlice.reducer