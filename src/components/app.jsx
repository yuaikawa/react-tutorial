import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "KJ",
        }
    }

    handleMouseOver() {
        this.setState({ name:"Tom"});
    }

    handleMouseOut() {
        this.setState({ name:"James"});
    }

    render () {
        return (
        <div
        onMouseOver = {() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
        >
            <Greeting name={this.state.name}/>
        </div>);
    }
}
export default App;
