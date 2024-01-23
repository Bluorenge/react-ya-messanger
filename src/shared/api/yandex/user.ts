import { FetchResponse, fetchInstance } from './base';
import { ProfileData, PasswordData, User } from '../_models/user';

const user = {
    changeProfile: (body: ProfileData): Promise<FetchResponse<User>> => {
        return fetchInstance.put('/user/profile', { body });
    },
    uploadAvatar: (body: FormData): Promise<FetchResponse<User>> => {
        return fetchInstance.put('/user/profile/avatar', { body });
    },
    changePassword: (body: PasswordData) => {
        return fetchInstance.put('/user/password', { body });
    },
    read: (id: number): Promise<FetchResponse<User>> => {
        return fetchInstance.get(`/user/user/${id}`);
    },
    getFoundUsers: (login: string): Promise<FetchResponse<User>> => {
        return fetchInstance.post('/user/search', {
            body: { login },
        });
    },
};

export { user };
