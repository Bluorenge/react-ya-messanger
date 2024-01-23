import { Button, VStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import { FormAvatar } from 'entities/user/formAvatar';
import { updateUserAvatar } from 'features/user/changeAvatar';

import { FormUser as FormUserReadOnly } from 'entities/user/formUser';
import { FormUser } from 'features/user/formUser';

import { signOut } from 'features/authentication/logout';
import { constant } from 'shared/config';
import { useAppDispatch } from 'shared/model';
import { AccountLayout } from 'shared/ui';

export const Account = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const isReadOnlyForm = location.pathname === constant.Routes.Account;

    const onAvatarFormSubmit = async (data) => {
        await dispatch(updateUserAvatar(data));
    };

    const onSingOutBtnClick = async () => {
        await dispatch(signOut);
    };

    return (
        <AccountLayout>
            <VStack
                align="stretch"
                textAlign="right"
                w={510}
                spacing={5}
                p={5}
            >
                <FormAvatar onSubmit={onAvatarFormSubmit} />
                {isReadOnlyForm ? (
                    <>
                        <FormUserReadOnly />

                        <VStack align="flex-end">
                            <Link to={constant.Routes.AccountInfoEdit}>
                                Change information
                            </Link>
                            <Link to={constant.Routes.AccountPasswordEdit}>
                                Change password
                            </Link>
                            <Button onClick={onSingOutBtnClick}>
                                Sign out
                            </Button>
                        </VStack>
                    </>
                ) : (
                    <>
                        <FormUser />
                        <Link to={constant.Routes.Register}>Back to account</Link>
                    </>
                )}
            </VStack>
        </AccountLayout>
    );
};
