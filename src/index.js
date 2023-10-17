import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './client/public/app.jsx';

import './client/public/styles/styles.css';

const cheese = document.createElement('main');
document.querySelector('body').append(cheese);

const root = createRoot(cheese);

console.log(root);

// render the app into the root
root.render(<App />);
