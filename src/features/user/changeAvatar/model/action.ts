import { Toast } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { yaApi } from 'shared/api';

export const updateUserAvatar = createAsyncThunk(
    'user/updateAvatar',
    async (data: { avatar: any }) => {
        try {
            const formData = new FormData();
            formData.append('avatar', data.avatar[0]);

            const response = await yaApi.user.uploadAvatar(formData);

            if ('reason' in response.data) {
                throw new Error(response.data.reason);
            }

            return response;
        } catch (error) {
            Toast(error.message);
        }
    }
);
