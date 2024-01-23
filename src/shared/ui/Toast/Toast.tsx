import { useToast } from '@chakra-ui/react';

export const Toast = (
    message: string,
    type:
        | 'info'
        | 'warning'
        | 'success'
        | 'error'
        | 'loading'
        | undefined = 'error'
) => {
    const toast = useToast();

    toast({
        description: message,
        status: type,
        position: 'top-right',
        isClosable: true,
        duration: 5000,
        variant: 'left-accent',
    });
};
