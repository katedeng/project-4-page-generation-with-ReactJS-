import React from 'react';
import './style.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <
            div id = "header-container" >
            <
            img className = "header-my-logo"
            src = "https://www.thesprucepets.com/thmb/Llw8_HZDa-8ToP03sXClYZIQluk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cute-teacup-dog-breeds-4587847-hero-4e1112e93c68438eb0e22f505f739b74.jpg" /
            >
            <
            div className = "header-rectangle" / >
            <
            /div>
        );
    }
}

export default Header;