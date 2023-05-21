import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { inputAnatomy } from '@chakra-ui/anatomy';
import { PRIMARY_COLOR } from './constant';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const fieldVariantBorderBottom = definePartsStyle({
    field: {
        border: 0,
        borderBottom: `1px solid ${PRIMARY_COLOR}`,
        borderRadius: 0,
        backgroundColor: 'transparent',
        padding: 0,
    },
});

const inputTheme = defineMultiStyleConfig({
    variants: {
        'border-bottom': fieldVariantBorderBottom,
    },
    defaultProps: {
        variant: 'border-bottom',
    },
});

export { inputTheme };
