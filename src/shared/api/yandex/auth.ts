import { fetchInstance, FetchResponse } from './base';
import { SignInData, SignUpData, SignUpResponse } from '../_models/auth';
import { User } from '../_models/user';

const auth = {
    signUp: (body: SignUpData): Promise<FetchResponse<SignUpResponse>> => {
        return fetchInstance.post('/auth/signup', { body });
    },
    signIn: (body: SignInData): Promise<FetchResponse<SignInData>> => {
        return fetchInstance.post('/auth/signin', { body });
    },
    read: (): Promise<FetchResponse<User>> => {
        return fetchInstance.get('/auth/user');
    },
    logout: () => {
        return fetchInstance.post('/auth/logout');
    }
};

export { auth };
