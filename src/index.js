import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import DebounceComponent from './components/Debouncing/DebounceComponent';
import ThrottleComponent from './components/Throttling/ThrottleComponent';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='debouncing' element={<DebounceComponent />} />
            <Route path='throttling' element={<ThrottleComponent />} />
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
