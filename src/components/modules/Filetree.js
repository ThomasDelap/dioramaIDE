import React from 'react';

import Treenode from './TreeNode';

import * as fs from 'fs';
import * as path from 'path';

export default class Filetree extends React.Component {

    constructor(){
        super();

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
        var filePath = path.join(os.homedir(), 'Desktop', 'defold-examples-master', 'alien-world');

        this.loadFolder(filePath).then((folderData) => {
            var {treeview} = this.state;
            treeview.push(folderData);

            console.log(folderData);

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
    loadFolder(path){
        return new Promise((resolve, reject) => {
            resolve({name: 'diorama_js', depth: 0, nodes: this.walk(path)});
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

    render(){
        return (

            <ul className="filetree filetree-wrapper">
                {this.state.treeview.map((item, i) => (
                    <Treenode data={item} key={i} active={true} />
                ))}
            </ul>

        )
    }
}
