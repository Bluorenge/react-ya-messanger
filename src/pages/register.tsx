import { AuthLayout } from 'shared/ui';
import { ChangeTheme } from 'features/theme/changeTheme';
import { RegisterForm } from 'features/authentication/register';

export const Register = () => {
    return (
        <AuthLayout headerSlot={<ChangeTheme />}>
            <RegisterForm />
        </AuthLayout>
    );
};
