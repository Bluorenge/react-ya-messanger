import { FetchResponse, fetchInstance } from './base';
import {
    ChatData,
    ChatsOption,
    DeletedChatData,
    ChatUsersOption,
    ChatUser,
    Token,
} from '../_models/chat';

const chats = {
    read(options?: ChatsOption): Promise<FetchResponse<ChatData[]>> {
        return fetchInstance.get('/chats', {
            body: options,
        });
    },
    create(title: string) {
        return fetchInstance.post('/chats', {
            body: { title },
        });
    },
    delete(id: number): Promise<FetchResponse<DeletedChatData>> {
        return fetchInstance.delete('/chats', {
            body: { chatId: id },
        });
    },
    getUsers(params: ChatUsersOption): Promise<FetchResponse<ChatUser[]>> {
        return fetchInstance.get(`/chats/${params.id}/users`);
    },
    addUsers(id: number, users: number[]) {
        return fetchInstance.put('/chats/users', {
            body: { chatId: id, users },
        });
    },
    deleteUsers(id: number, users: number[]) {
        return fetchInstance.delete('/chats/users', {
            body: { chatId: id, users },
        });
    },
    async getToken(id: number): Promise<string | null> {
        const response: FetchResponse<Token> = await fetchInstance.post(
            `/chats/token/${id}`
        );

        if ('token' in response.data) {
            return response.data.token;
        }
        return null;
    },
    addChatAvatar(body: FormData): Promise<FetchResponse<ChatData>> {
        return fetchInstance.put('/chats/avatar', {
            body,
            headers: {
                'Content-Type': 'multipart/form-body',
            },
        });
    },
};

export { chats };
