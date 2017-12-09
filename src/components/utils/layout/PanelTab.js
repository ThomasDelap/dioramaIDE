import React from 'react';

export default class PanelTab extends React.Component {

    getChildren(){

    }

    render(){
        return (

            <div {...this.props}>
                {this.props.children}
            </div>

        )
    }

}
