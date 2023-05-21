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
import { validationModel } from '../..';

export const RegisterForm = () => {
    const [showPass, setShowPass] = useBoolean();

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<authModels.SignUpData & { confirm_password: string }>();

    const [serverErrorMessage, setServerErrorMessage] = useState('');

    async function onSubmit(values: authModels.SignUpData) {
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
            <Heading
                size="lg"
                textAlign="center"
            >
                Register
            </Heading>

            <VStack
                as="form"
                onSubmit={handleSubmit(data => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { confirm_password, ...signUpData } = data;
                    onSubmit(signUpData);
                })}
                spacing={5}
            >
                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.login)}
                >
                    <Input
                        placeholder=" "
                        {...register(
                            'email',
                            validationModel.emailValidationSetting
                        )}
                    />

                    <FormLabel htmlFor="email">Email</FormLabel>

                    <FormErrorMessage>
                        {errors.email && errors.email.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.first_name)}
                >
                    <Input
                        placeholder=" "
                        {...register(
                            'first_name',
                            validationModel.nameValidationSetting
                        )}
                    />

                    <FormLabel htmlFor="first_name">First name</FormLabel>

                    <FormErrorMessage>
                        {errors.first_name &&
                            errors.first_name.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.second_name)}
                >
                    <Input
                        placeholder=" "
                        {...register(
                            'second_name',
                            validationModel.nameValidationSetting
                        )}
                    />

                    <FormLabel htmlFor="second_name">Second name</FormLabel>

                    <FormErrorMessage>
                        {errors.second_name &&
                            errors.second_name.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.phone)}
                >
                    <Input
                        placeholder=" "
                        {...register(
                            'phone',
                            validationModel.phoneValidationSetting
                        )}
                    />

                    <FormLabel htmlFor="phone">Phone</FormLabel>

                    <FormErrorMessage>
                        {errors.phone && errors.phone.message?.toString()}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.login)}
                >
                    <Input
                        placeholder=" "
                        {...register(
                            'login',
                            validationModel.loginValidationSetting
                        )}
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
                            {...register(
                                'password',
                                validationModel.passwordValidationSetting
                            )}
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

                <FormControl
                    variant="floating"
                    isInvalid={Boolean(errors.confirm_password)}
                >
                    <InputGroup>
                        <Input
                            placeholder=" "
                            pr="4.5rem"
                            type={showPass ? 'text' : 'password'}
                            {...register(
                                'confirm_password',
                                validationModel.confirmPasswordValidationSetting(
                                    watch('password')
                                )
                            )}
                        />

                        <FormLabel htmlFor="confirm_password">
                            Password
                        </FormLabel>
                    </InputGroup>

                    <FormErrorMessage>
                        {errors.confirm_password &&
                            errors.confirm_password.message?.toString()}
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

                    {serverErrorMessage && (
                        <Text color="red.300">{serverErrorMessage}</Text>
                    )}

                    <Link to={constant.Routes.Login}>Sign in</Link>
                </VStack>
            </VStack>
        </VStack>
    );
};
