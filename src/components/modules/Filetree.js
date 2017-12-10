import React from 'react';
import {connect} from 'react-redux';

import Treenode from './TreeNode';
import actions from '../../actions/TabsAction';

import * as fs from 'fs';
import * as path from 'path';

class Filetree extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            treeview: []
        };
    }

    /**
     * @description Load folder data when creating the module
     */
    componentDidMount(){
        var os = require('os');
        var path = require('path');
        var filePath = path.join(os.homedir(), 'Desktop', 'defold-examples-master', 'runner');

        this.loadFolder(filePath).then((folderData) => {
            var {treeview} = this.state;
            treeview.push(folderData);

            this.setState({
                ...this.state,
                treeview
            });
        });
    }

    /**
    * @description Load folder to the module
    * @param path
    */
    loadFolder(folderPath){
        return new Promise((resolve, reject) => {
            resolve({name: path.basename(folderPath), depth: 0, nodes: this.walk(folderPath)});
        });
    }

    /**
    * @description Recursively deep map
    * @param dir
    */
    walk(dir, depth = 1){
        var results = [];
        var list = fs.readdirSync(dir);

        list.forEach((file) => {

            var filePath = path.join(dir, file);
            var stat = fs.lstatSync(filePath);

            if(stat.isDirectory()){
                results.push(
                    {name: file, type: 'folder', depth, nodes: this.walk(filePath, depth + 1)});
                } else {
                    results.push(
                        {name: file, depth, type: this.getExtension(file)}
                    );
                }
            });

            results.sort(function(a,b){
                return ((a.type == 'folder') - (b.type == 'folder')) || (a.name.toString().localeCompare(b.name));
            }).reverse();
            return results;
        }

    /*
    * @description Get extension for the type of the file
    * @param fileName
    */
    getExtension(fileName){
        return fileName.split('.').pop();
    }

    /**
     * @description Add to tabulation the file with the type
     * @params Object
     */
    createTabulation(object){

        this.props.addTab(object);
    }


    render(){
        return (

            <ul className="filetree filetree-wrapper">
                {this.state.treeview.map((item, i) => (
                    <Treenode data={item} key={i} active={true} handleAction={this.createTabulation.bind(this)}/>
                ))}
            </ul>

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
        removeTab: (tabID) => dispatch(actions.removeTab(tabID))
    }
}

export default connect(stateToProps, dispatchToProps)(Filetree);
