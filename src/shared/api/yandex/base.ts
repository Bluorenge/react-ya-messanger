import { constant } from 'shared/config';

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type HttpMethod = `${METHODS}`;

interface FetchOptions {
    method: HttpMethod;
    headers?: HeadersInit;
    body?: BodyInit;
}

type FetchResponse<Response> = {
    data: Response | { reason: string };
    status: number;
};

class FetchInstance {
    private static instance: FetchInstance;
    private readonly baseUrl: string;

    private constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public static getInstance(baseUrl: string): FetchInstance {
        if (!FetchInstance.instance) {
            FetchInstance.instance = new FetchInstance(baseUrl);
        }

        return FetchInstance.instance;
    }

    public async get<T>(
        path: string,
        body: any = {}
    ): Promise<FetchResponse<T>> {
        return this.request<T>(path, { method: METHODS.GET, ...body });
    }

    public async post<T>(
        path: string,
        body: any = {}
    ): Promise<FetchResponse<T>> {
        return this.request<T>(path, { method: METHODS.POST, ...body });
    }

    public async put<T>(
        path: string,
        body: any = {}
    ): Promise<FetchResponse<T>> {
        return this.request<T>(path, { method: METHODS.PUT, ...body });
    }

    public async delete<T>(
        path: string,
        body: any = {}
    ): Promise<FetchResponse<T>> {
        return this.request<T>(path, { method: METHODS.DELETE, ...body });
    }

    private async request<T>(
        path: string,
        options: FetchOptions
    ): Promise<FetchResponse<T>> {
        const {
            method,
            body,
            headers = { 'Content-Type': 'application/json' },
        } = options;
        const isFormData = body instanceof FormData;

        const response = await fetch(`${this.baseUrl}${path}`, {
            method,
            headers,
            credentials: 'include',
            body: isFormData ? body : JSON.stringify(body),
        });
        const data = await response.json();

        return {
            data,
            status: response.status,
        };
    }
}

const fetchInstance = FetchInstance.getInstance(constant.main.YA_API);

export { fetchInstance };
export type { FetchResponse };
