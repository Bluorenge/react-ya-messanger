import { Toast } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { yaApi } from 'shared/api';

export const signOut = createAsyncThunk('user/signOut', async () => {
    try {
        const response = await yaApi.auth.logout();

        if (response.status === 500) {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        Toast(error.message);
    }
});
