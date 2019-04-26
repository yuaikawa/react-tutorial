import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
    render () {
        return (
        <div>
            <Greeting name="john"/>
            <Greeting name="tanaka"/>
        </div>);
    }
}
export default App;
