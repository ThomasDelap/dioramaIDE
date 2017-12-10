import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';

import Viewtree from './modules/Filetree';
import Properties from './modules/Properties';
import ChangedFile from './modules/ChangedFile';

import {Layout, Panel, PanelTab, TabNavigation, TabContent} from './utils/Layout';

export default class Main extends React.PureComponent {

    constructor(){
        super();

    }

    render(){

        return (

            <Layout className="main">

                <Panel init-ratio="320">
                    <Viewtree name="Assets" init-ratio="75%" />
                    <ChangedFile name="Help" />
                </Panel>

                <PanelTab className="canvas" init-ratio="100%" />
            </Layout>

        )
    }
}
