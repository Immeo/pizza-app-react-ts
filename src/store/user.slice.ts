import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistenState {
	jwt: string | null;
}

export interface UserState {
	jwt: string | null;
}

const initialState: UserState = {
	jwt: loadState<UserPersistenState>(JWT_PERSISTENT_STATE)?.jwt ?? null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addJwt: (state, action: PayloadAction<string>) => {
			state.jwt = action.payload;
		},
		removeJwt: state => {
			state.jwt = null;
		}
	}
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
