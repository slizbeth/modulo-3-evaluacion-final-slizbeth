import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter basename="/modulo-3-evaluacion-final-slizbeth"> 
        <App />
    </BrowserRouter>, 
document.getElementById('root'));
