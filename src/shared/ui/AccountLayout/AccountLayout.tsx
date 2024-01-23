import { type ReactNode } from 'react';
import { Box, Center, Flex, useColorMode } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const AccountLayout = ({ children }: { children: ReactNode }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex h="100vh">
            <Box
                w="64px"
                bgColor={`grayBg.${colorMode}`}
                borderRight="1px solid"
                borderColor="gray.400"
            >
                <Center
                    h="46px"
                    bg="brand.400"
                >
                    <ArrowBackIcon />
                </Center>
            </Box>

            <Center flex={1}>{children}</Center>
        </Flex>
    );
};
