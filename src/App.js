import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Layout from './Pages/layout';
import Form from './Pages/Form';
function App() {

    return (
        

        <ChakraProvider>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='about' element={<About />} />
                    <Route path='form' element={<Form />} />
                    {/* <Route path='dynamicform'element={<Dynamicform/>}/> */}

                </Route>
            </Routes>
        </ChakraProvider>

    )
}

export default App;
