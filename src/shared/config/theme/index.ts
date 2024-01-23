import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { PRIMARY_COLOR } from './constant';
import { formTheme } from './form-theme';
import { inputTheme } from './input-theme';

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    colors: {
        brand: {
            400: PRIMARY_COLOR,
        },
        grayBg: {
            light: '#fafafa',
            dark: 'gray.800',
        },
        gray: {
            300: '#fafafa',
            400: '#efefef',
        },
    },
    components: {
        Container: {
            baseStyle: {
                maxW: '1280px',
            },
        },
        Form: formTheme,
        Input: inputTheme,
    },
});

export { theme };
