import React from 'react';

export default class TabContent extends React.Component {
    
    render(){
        return (

            <div {...this.props}>
                {this.props.children}
            </div>

        )
    }

}
