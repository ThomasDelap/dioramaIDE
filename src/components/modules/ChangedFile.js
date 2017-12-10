import React from 'react';

export default class ChangedFile extends React.Component {

    constructor(){
        super();

        this.state = {
            count: 0
        }
    }

    handleAction(e){
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return (

            <p style={this.props.style}>
                {this.state.count}

                <button onClick={this.handleAction.bind(this)}>Ajouter 1</button>
            </p>

        )
    }
}
