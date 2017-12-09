import React from 'react';

import Viewtree from './modules/Filetree';
import Properties from './modules/Properties';
import {Layout, Panel, PanelTab, TabNavigation, TabContent} from './utils/Layout';

export default class Main extends React.PureComponent {

    render(){
        return (

            <Layout className="main">

                <Panel init-ratio="320">
                    <Viewtree name="Assets"/>
                    <Properties name="Test"/>
                </Panel>

                <PanelTab className="canvas" init-ratio="100%">

                    <TabNavigation className="canvas-tabs" base={(
                            <span className="canvas-tab-item %is-active%">%name%<i className="fa fa-times"></i></span>
                        )}>
                    </TabNavigation>

                    <Layout className="canvas-wrapper">

                        <TabContent className="canvas-content" init-ratio="100%">
                            <img src="../src/assets/code.png" />
                        </TabContent>

                        <Panel init-ratio="320">
                            <Properties name="Outline" />
                            <Properties name="Properties"/>
                            <Properties name="Test"/>
                        </Panel>
                    </Layout>
                </PanelTab>
            </Layout>

        )
    }
}
