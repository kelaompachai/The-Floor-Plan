// the entry point for the login/signup page

import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginWrapper from './client/public/loginWrapper';

import './client/public/styles/login.css';

const cheese = document.createElement('main');
document.querySelector('body').append(cheese);

const root = createRoot(cheese);

// render the app into the root
root.render(<LoginWrapper />);

