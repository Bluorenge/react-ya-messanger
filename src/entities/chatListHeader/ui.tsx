import { Avatar, Box, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { constant } from 'shared/config';

export const ChatListHeader = ({ actionSlot }: { actionSlot?: ReactNode }) => {
    return (
        <HStack spacing={4}>
            <Box>
                <Avatar
                    name="Oshigaki Kisame"
                    src="https://bit.ly/broken-link"
                />
            </Box>
            <Box>
                <Link to={constant.Routes.Account}>Profile</Link>
            </Box>
            <Box>{actionSlot}</Box>
        </HStack>
    );
};
