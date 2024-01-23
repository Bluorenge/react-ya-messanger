import { RouterProvider } from 'react-router';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { store } from './store';
import { theme } from 'shared/config';

import './styles.css';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    );
}

export default App;
