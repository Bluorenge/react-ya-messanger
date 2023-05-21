import { createBrowserRouter } from 'react-router-dom';

import { constant } from 'shared/config';
import { Index } from 'pages';
import { ErrorPage } from 'pages/error-page';
import { Login } from 'pages/login';
import { Register } from 'pages/register';

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
                element: <p>Messanger</p>
            }
        ],
    },
]);
