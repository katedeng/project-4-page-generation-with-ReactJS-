import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from './components/Example/index';
import Header from './components/Header/index';

ReactDOM.render( <
    div >
    <
    Header / >
    <
    Example / >
    <
    /div>,
    document.getElementById('reactapp')
);