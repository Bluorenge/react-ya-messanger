import { AuthLayout } from 'shared/ui';
import { ChangeTheme } from 'features/theme/changeTheme';
import { LoginForm } from 'features/authentication/login';

export const Login = () => {
    return (
        <AuthLayout headerSlot={<ChangeTheme />}>
            <LoginForm />
        </AuthLayout>
    );
};
