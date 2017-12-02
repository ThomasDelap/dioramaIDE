import React from 'react';

import FiletreeModule from './modules/Filetree';

export default class Main extends React.Component {

    render(){
        return (

            <main className="main">
                <FiletreeModule />

                <hr className="canvas-splitter" />

                <div className="canvas">
                    <section className="canvas-tabs">
                        <span className="tab-item is-active">Menu.scene</span>
                        <span className="tab-item">Sprite.module</span>
                    </section>

                    <section className="canvas-wrapper">
                        <img src="../src/assets/code.png" />
                    </section>
                </div>

                <hr className="canvas-splitter" />

            <div className="canvas-properties">
                <h2>Properties</h2>
            </div>
            </main>

        )
    }

}
