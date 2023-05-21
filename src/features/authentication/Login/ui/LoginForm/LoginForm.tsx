import {
    VStack,
    Heading,
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    Button,
    useBoolean,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FetchResponse, authModels, yaApi } from 'shared/api';
import { constant } from 'shared/config';

export const LoginForm = () => {
    const [showPass, setShowPass] = useBoolean();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<authModels.SignInData>();

    const [serverError, setServerError] = useState('');

    async function onSubmit(values: authModels.SignInData) {
        try {
            const response: FetchResponse<authModels.SignInData> =
                await yaApi.auth.signIn(values);

            if ('reason' in response.data) {
                throw new Error(response.data.reason);
            }
        } catch (error) {
            setServerError(error.message);
        }
    }

    return (
        <VStack
            spacing={5}
            align="stretch"
            shouldWrapChildren
        >
            <Heading
                size="lg"
                textAlign="center"
            >
                Login
            </Heading>

            <VStack
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                spacing={5}
            >
                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.login)}
                >
                    <Input
                        placeholder=" "
                        {...register('login', {
                            required: 'This is required',
                        })}
                    />

                    <FormLabel htmlFor="login">Login</FormLabel>

                    <FormErrorMessage>
                        {errors.login && errors.login.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.password)}
                >
                    <InputGroup>
                        <Input
                            placeholder=" "
                            pr="4.5rem"
                            type={showPass ? 'text' : 'password'}
                            {...register('password', {
                                required: 'This is required',
                            })}
                        />

                        <FormLabel htmlFor="password">Password</FormLabel>

                        <InputRightElement w="3.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={setShowPass.toggle}
                            >
                                {showPass ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>
                        {errors.password && errors.password.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <VStack
                    spacing={2}
                    w="100%"
                    mt={8}
                >
                    <Button
                        w="100%"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Log In
                    </Button>

                    {serverError && <Text color="red.300">{serverError}</Text>}

                    <Link to={constant.Routes.Register}>First time?</Link>
                </VStack>
            </VStack>
        </VStack>
    );
};
