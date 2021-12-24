import React from 'react';
import { HashRouter } from "react-router-dom";
import App from './App';
import './assets/css/style.scss';

export const appRenderer = () => (
    <HashRouter>
        <App />
    </HashRouter>
)