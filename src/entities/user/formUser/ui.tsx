import { VStack } from '@chakra-ui/react';

import { useAppSelector } from 'shared/model';
import { InputFieldLabelLine } from 'shared/ui';

export const FormUser = () => {
    const { user } = useAppSelector((state) => state.user);

    return (
        <VStack>
            <InputFieldLabelLine
                label="Email"
                defaultValue={user?.email}
                isReadOnly={true}
            />
            <InputFieldLabelLine
                label="Login"
                defaultValue={user?.login}
                isReadOnly={true}
            />
            <InputFieldLabelLine
                label="First name"
                defaultValue={user?.first_name}
                isReadOnly={true}
            />
            <InputFieldLabelLine
                label="Second name"
                defaultValue={user?.second_name}
                isReadOnly={true}
            />
            <InputFieldLabelLine
                label="Display name"
                defaultValue={user?.display_name}
                isReadOnly={true}
            />
            <InputFieldLabelLine
                label="Phone"
                defaultValue={user?.phone}
                isReadOnly={true}
            />
        </VStack>
    );
};
