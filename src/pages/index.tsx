import { useBoolean } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { constant } from 'shared/config';
import { useAppDispatch } from 'shared/model';
import { getCurrentUser } from 'shared/model/storeActions';

export const Index = () => {
    const navigate = useNavigate();
    const { pathname, state } = useLocation();
    const [isLoading, setIsLoading] = useBoolean(true);
    const dispatch = useAppDispatch();

    const getUser = async () => {
        const user = await dispatch(getCurrentUser());

        const isAuthPage = [
            constant.Routes.Login,
            constant.Routes.Register,
            '/',
        ].includes(pathname as constant.Routes);

        setIsLoading.off();

        if (isAuthPage && user) {
            return navigate(state?.from.pathname || constant.Routes.Messenger, {
                replace: true,
            });
        }
    };

    useLayoutEffect(() => {
        getUser();
    }, []);

    return isLoading ? null : <Outlet />;
};
