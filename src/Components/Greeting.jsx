import { React, Component } from 'react';

//class Components

class Greeting extends Component {

    render() {
        return (
            <>
                <h1>I am a class Component</h1>
                <p>Hi {this.props.name}, your age is {this.props.age}</p>
            </>

        )
    }
}

export default Greeting