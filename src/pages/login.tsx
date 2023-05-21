import { AuthLayout } from 'shared/ui';
import { ChangeTheme } from 'features/theme/ChangeTheme';
import { LoginForm } from 'features/authentication/Login';

export const Login = () => {
    return (
        <AuthLayout headerSlot={<ChangeTheme />}>
            <LoginForm />
        </AuthLayout>
    );
};
