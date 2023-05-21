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
        primary: {
            main: PRIMARY_COLOR,
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
