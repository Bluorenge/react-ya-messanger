import { useBoolean } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { yaApi } from 'shared/api';
import { constant } from 'shared/config';

export const Index = () => {
    const navigate = useNavigate();
    const { pathname, state } = useLocation();
    const [isLoading, setIsLoading] = useBoolean(true);

    const getUser = async () => {
        const user = await yaApi.auth.read();
        const isUserDontExist = 'reason' in user.data;
        const isAuthPage = [
            constant.Routes.Login,
            constant.Routes.Register,
        ].includes(pathname as constant.Routes);

        setIsLoading.off();

        if (isAuthPage && !isUserDontExist) {
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
