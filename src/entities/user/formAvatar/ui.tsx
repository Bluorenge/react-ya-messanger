import {
    Avatar,
    Box,
    Button,
    FormLabel,
    HStack,
    Heading,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppSelector } from 'shared/model';
import { OverlayAvatar } from 'shared/ui';

export const FormAvatar = ({
    onSubmit,
}: {
    onSubmit: (data: any) => Promise<void>;
}) => {
    const { user } = useAppSelector((state) => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit } = useForm();
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    return (
        <>
            <HStack spacing={4}>
                <Box position="relative">
                    <Avatar
                        size="xl"
                        name="Oshigaki Kisame"
                        src={`https://ya-praktikum.tech/api/v2/resources${user?.avatar}`}
                        onClick={onOpen}
                        onMouseEnter={() => setIsAvatarHovered(true)}
                        onMouseLeave={() => setIsAvatarHovered(false)}
                        cursor="pointer"
                    />

                    <OverlayAvatar opacity={isAvatarHovered ? 1 : 0}>
                        Change avatar
                    </OverlayAvatar>
                </Box>

                <Box>
                    <Text>
                        {user?.first_name} {user?.second_name}
                    </Text>
                </Box>
            </HStack>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="sm"
                isCentered
            >
                <ModalOverlay />

                <ModalContent p={6}>
                    <Heading
                        as="h2"
                        size="md"
                        mb={12}
                        textAlign="center"
                    >
                        Upload file
                    </Heading>
                    <ModalCloseButton />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack gap={2}>
                            <FormLabel className="field field--file">
                                <input
                                    type="file"
                                    {...register('avatar')}
                                />
                                <span>Select file on computer</span>
                            </FormLabel>

                            <Button type="submit">Change avatar</Button>
                        </VStack>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};
