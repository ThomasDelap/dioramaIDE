import React from 'react';
import {connect} from 'react-redux';

import {TabNavigation, TabContent, Panel, Layout} from '../Layout';
import Properties from './../../modules/Properties';

import actions from '../../../actions/TabsAction';

class PanelTab extends React.Component {

    constructor(){
        super();
    }

    /**
     * @description Close a tab
     * @params id
     */
    closeTabulation(id){

        this.props.removeTab(id);
    }

    /**
     * @description Modify the active tab
     * @params id
     */
    changeTabulation(id){

        this.props.activeTab(id);
    }

    render(){
        var tabs = this.props.tab;

        return (

            <div style={this.props.style} className={this.props.className}>

                <div className="canvas-tabs">
                    {tabs.all.map((item, i) => (
                        <span className={"canvas-tab-item" + (tabs.active == i ? ' is-active': '')} key={i}
                            onClick={this.changeTabulation.bind(this, i)}>
                            <i className={"icon icon-" + item.type}></i>{item.name}<i className="fa fa-times" onClick={this.closeTabulation.bind(this, i)}></i>
                        </span>
                    ))}
                </div>

                <Layout className="canvas-wrapper">

                    <TabContent className="canvas-content" init-ratio="100%">
                        <p>{(tabs.all[tabs.active] || []).name}</p>
                    </TabContent>

                    <Panel init-ratio="380">
                        <Properties name="Properties" />
                    </Panel>
                </Layout>
            </div>

        )
    }

}


const stateToProps = (state) => {
    return {
        tab: state.tab
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addTab: (tabs) => dispatch(actions.addTab(tabs)),
        removeTab: (id) => dispatch(actions.removeTab(id)),
        activeTab: (id) => dispatch(actions.activeTab(id))
    }
}

export default connect(stateToProps, dispatchToProps)(PanelTab);
