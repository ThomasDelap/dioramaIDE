import React from 'react';

export default class TabNavigation extends React.Component {

    getChildren(){

    }

    render(){
        return (

            <div className="canvas-tabs">
                <span className="canvas-tab-item is-active">Menu.scene<i className="fa fa-times"></i></span>
                <span className="canvas-tab-item">
                    <i className="icon icon-module"></i>Sprite.module<i className="fa fa-times"></i>
                </span>
            </div>

        )
    }

}
