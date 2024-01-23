declare global {
    type Nullable<T> = T | null;

    type Keys<T extends Record<string, unknown>> = keyof T;

    type Values<T extends Record<string, unknown>> = T[Keys<T>];

    type RootState = import('../src/app/store').RootState;
    type AppDispatch = import('../src/app/store').AppDispatch;
}

export {};
