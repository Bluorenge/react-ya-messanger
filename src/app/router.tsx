import { createBrowserRouter } from 'react-router-dom';

import { constant } from 'shared/config';
import { Index } from 'pages';
import { ErrorPage } from 'pages/error-page';
import { Login } from 'pages/login';
import { Register } from 'pages/register';
import { Messenger } from 'pages/messemger';
import { Account } from 'pages/account';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Index />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: constant.Routes.Login,
                element: <Login />,
            },
            {
                path: constant.Routes.Register,
                element: <Register />,
            },
            {
                path: constant.Routes.Messenger,
                element: <Messenger />,
            },
            {
                path: constant.Routes.Account,
                element: <Account />,
            },
            {
                path: constant.Routes.AccountInfoEdit,
                element: <Account />,
            },
            {
                path: constant.Routes.AccountPasswordEdit,
                element: <Account />,
            },
        ],
    },
]);
