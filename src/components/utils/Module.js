import React from 'react';

export default class Module extends React.Component {

    render(){
        return (

            <section className="module">
                <h2>{this.props.name}</h2>
                {this.props.children}
            </section>

        )
    }

}
