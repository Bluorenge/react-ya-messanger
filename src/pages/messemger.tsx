import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { ChatListHeader } from 'entities/chatListHeader';
import { ChatListSearch } from 'features/chatList/Search';

export const Messenger = () => {
    return (
        <Grid
            h="100vh"
            w="100vw"
            templateRows="repeat(24, 1fr)"
            templateColumns="repeat(24, 1fr)"
        >
            <GridItem
                rowSpan={24}
                colSpan={5}
                minWidth={300}
                borderEndWidth={1}
            >
                <VStack
                    spacing={4}
                    p={4}
                    pb={6}
                    align="start"
                    borderBottomWidth={1}
                >
                    <ChatListHeader />
                    <ChatListSearch />
                </VStack>
            </GridItem>

            <GridItem
                rowSpan={3}
                colSpan={19}
            >
                <p>Header</p>
            </GridItem>

            <GridItem
                rowSpan={18}
                colSpan={19}
            >
                <p>Messages</p>
            </GridItem>

            <GridItem
                rowSpan={3}
                colSpan={19}
            >
                <p>Message input</p>
            </GridItem>
        </Grid>
    );
};
