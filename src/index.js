import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './client/public/app.jsx';

// get the div that is to contain the app and make it the root
const cheese = document.querySelector('#root');
console.log(cheese);

const root = createRoot(document.querySelector('#root'));

// render the app into the root
root.render(<App />);
