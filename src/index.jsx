import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/extensions
import App from './client/public/app.jsx';

import './client/public/styles/styles.css';

const cheese = document.createElement('main');
document.querySelector('body').append(cheese);

const root = createRoot(cheese);

// render the app into the root
root.render(<App />);
