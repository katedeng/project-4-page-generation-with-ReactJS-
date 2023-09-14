import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import States from './components/States/index';
import Example from './components/Example/index';

function P5() {
    return ( <
        div >
        <
        HashRouter >
        <
        Link to = "/states" > States < /Link> <
        Link to = "/example" > Example < /Link> <
        Route path = "/states"
        component = { States }
        /> <
        Route path = "/example"
        component = { Example }
        /> <
        /HashRouter> <
        /div>
    );
}

ReactDOM.render( < P5 / > , document.getElementById('reactapp'));