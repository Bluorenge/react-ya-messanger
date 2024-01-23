import { useState } from 'react';
import {
    VStack,
    Button,
    Text,
    FormControl,
    FormErrorMessage
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { authModels, FetchResponse, userModels, yaApi } from 'shared/api';

import { useAppSelector, validation } from 'shared/model';
import { InputFieldLabelLine } from 'shared/ui';
import { Link } from 'react-router-dom';
import { constant } from 'shared/config';

export const FormUser = () => {
    const { user } = useAppSelector((state) => state.user);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<userModels.ProfileData>();

    const [serverErrorMessage, setServerErrorMessage] = useState('');

    async function onSubmit(values: userModels.ProfileData) {
        console.log('values: ', values);
        return;
        try {
            const response: FetchResponse<authModels.SignUpResponse> =
                await yaApi.auth.signUp(values);

            if ('reason' in response.data) {
                throw new Error(response.data.reason);
            }
        } catch (error) {
            setServerErrorMessage(error.message);
        }
    }

    return (
        <VStack
            spacing={5}
            align="stretch"
            shouldWrapChildren
        >
            <VStack
                as="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputFieldLabelLine
                    label="Email"
                    defaultValue={user?.email}
                    {...register('email', validation.email)}
                />
                <InputFieldLabelLine
                    label="Login"
                    defaultValue={user?.login}
                    {...register('login')}
                />
                <InputFieldLabelLine
                    label="First name"
                    defaultValue={user?.first_name}
                    {...register('first_name', validation.name)}
                />
                <InputFieldLabelLine
                    label="Second name"
                    defaultValue={user?.second_name}
                    {...register('second_name', validation.name)}
                />
                <InputFieldLabelLine
                    label="Display name"
                    defaultValue={user?.display_name}
                    {...register('display_name')}
                />

                <FormControl isInvalid={Boolean(errors.login)}>
                    <InputFieldLabelLine
                        label="Phone"
                        defaultValue={user?.phone}
                        {...register('phone', validation.phone)}
                    />

                    {errors.phone && errors.phone.message?.toString()}
                    <FormErrorMessage>
                        {errors.phone && errors.phone.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <VStack
                    spacing={2}
                    w="100%"
                    mt={20}
                >
                    <Button
                        w="100%"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Update information
                    </Button>

                    {serverErrorMessage && (
                        <Text color="red.300">{serverErrorMessage}</Text>
                    )}
                </VStack>
            </VStack>
        </VStack>
    );
};
