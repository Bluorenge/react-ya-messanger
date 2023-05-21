import { type ReactNode } from 'react';
import { AbsoluteCenter, Container } from '@chakra-ui/react';

export const AuthLayout = ({
    children,
    headerSlot,
}: {
    children: ReactNode;
    headerSlot?: ReactNode;
}) => {
    return (
        <Container
            h="100vh"
            p={4}
        >
            {headerSlot}
            <AbsoluteCenter>{children}</AbsoluteCenter>
        </Container>
    );
};
