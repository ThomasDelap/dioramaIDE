import React from 'react';

export default class Properties extends React.Component {

    constructor(){
        super();

    }

    render(){
        return (

            <p style={this.props.style}>a</p>

        )
    }
}
