import { AuthLayout } from 'shared/ui';
import { ChangeTheme } from 'features/theme/ChangeTheme';
import { RegisterForm } from 'features/authentication/Register';

export const Register = () => {
    return (
        <AuthLayout headerSlot={<ChangeTheme />}>
            <RegisterForm />
        </AuthLayout>
    );
};
