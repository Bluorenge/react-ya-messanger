import { RouterProvider } from 'react-router';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'shared/config';
import './index.css';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
