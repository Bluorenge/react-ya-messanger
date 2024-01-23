import { createAsyncThunk } from '@reduxjs/toolkit';
import { yaApi } from 'shared/api';
import { Toast } from 'shared/ui';

export const getCurrentUser = createAsyncThunk(
    'user/getCurrentUser',
    async () => {
        try {
            const response = await yaApi.auth.read();

            if ('reason' in response.data) {
                throw new Error(response.data.reason);
            }
            return response.data;
        } catch (error) {
            Toast(error.message);
        }
    }
);
