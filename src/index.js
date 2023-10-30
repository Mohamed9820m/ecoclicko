import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import './i18n.js'
import { HelmetProvider } from 'react-helmet-async';

const app = ReactDOM.createRoot(document.getElementById('root'))
app.render(<HelmetProvider>
    <App/>
    </HelmetProvider>)