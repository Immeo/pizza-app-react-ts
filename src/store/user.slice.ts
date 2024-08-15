import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addJwt: state => {
			state.jwt = 'jwt';
		},
		removeJwt: state => {
			state.jwt = null;
		}
	}
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
