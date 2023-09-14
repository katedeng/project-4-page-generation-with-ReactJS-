import React from 'react';
import './styles.css';

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                filter: ''
            };
            console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
        }

        handleInputChange(event) {
            this.setState({ filter: event.target.value });
        }

        render() {
                const statesData = window.cs142models.statesModel();
                const filteredStates = statesData
                    .filter((state) => state.toLowerCase().includes(this.state.filter.toLowerCase()))
                    .map((state) => < div key = { state } > { state } < /div>);
                        return ( <
                            div className = "cs142-states" >
                            <
                            h1 > This will list all states with the specificed filter, { `${this.state.filter}` } < /h1> {' '} <
                            h2 > Note: this is
                            case insensitive. < /h2> {' '} <
                            input in = "filter"
                            type = "text"
                            placeholder = "enter a filter"
                            value = { this.state.filter }
                            onChange = {
                                (event) => this.handleInputChange(event) }
                            />{' '} <
                            h2 > Filter results:
                                < /h2> {' '} <
                                div className = "search-results" > { ' ' } {
                                    filteredStates.length === 0 ? < p > No matching states found < /p> : filteredStates} {' '} <
                                        /div>{' '} { ' ' } <
                                        /div>
                                );
                        }
                    }

                export default States;