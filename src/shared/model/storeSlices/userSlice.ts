import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { userModels } from 'shared/api';
import { getCurrentUser } from '../storeActions';
import { signOut } from 'features/authentication/logout';

const initialState: {
    isAuth: boolean;
    isFetching: boolean;
    user: userModels.User | null;
} = {
    isAuth: false,
    isFetching: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (
            state,
            action: PayloadAction<userModels.User | null>
        ) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        /**
         * getCurrentUser
         */
        builder
            .addCase(getCurrentUser.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action: any) => {
                state.isAuth = true;
                state.isFetching = false;
                state.user = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.isFetching = false;
            });
        /**
         * signOut
         */
        builder
            .addCase(signOut.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(signOut.fulfilled, (state) => {
                state.isFetching = false;
                state.isAuth = false;
                state.user = null;
            })
            .addCase(signOut.rejected, (state) => {
                state.isFetching = false;
            });
    },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
