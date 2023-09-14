import React from 'react';

import States from '../States/index';
import Example from '../Example/index';

const STATE = 'State';
const EXAMPLE = 'Example';

class DynamicSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: STATE
        };
    }

    handleViewChange = () => {
        const newState = this.state.view === STATE ? EXAMPLE : STATE;
        this.setState({ view: newState });
    };

    render() {
        return ( <
            div >
            <
            button id = "dynamic-button"
            onClick = { this.handleViewChange } > { ' ' } { `Switch to ${this.state.view === STATE ? STATE : EXAMPLE} view` } { ' ' } <
            /button>{' '} { this.state.view === STATE ? < Example / > : < States / > } { ' ' } <
            /div>
        );
    }
}

export default DynamicSwitch;