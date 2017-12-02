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

    componentDidMount(){

        this.loadFolder();
    }

    /**
     * @description Load folder to the module
     * @param path
     */
    loadFolder(path){
        var os = require('os');
        var path = require('path');

        this.setState({
            ...this.state,
            treeview: this.walk(path.join(os.homedir(), 'Desktop', 'defold-examples-master', 'diorama_js'))
        });
    }

    /**
     * @description Recursively deep map
     * @param dir
     */
    walk(dir){
        var results = [];
        var list = fs.readdirSync(dir)

        list.forEach((file) => {

            var filePath = path.join(dir, file);
            var stat = fs.lstatSync(filePath);

            if(stat.isDirectory()){
                results.push(
                    {name: file, type: 'folder', nodes: this.walk(filePath)});
            } else {
                results.push(
                    {name: file, type: this.getExtension(file)}
                );
            }
        });
        return [{
            name: path.basename(dir),
            nodes: results
        }];
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

            <section className="filetree">
                <div>
                    <h2>Assets</h2>
                </div>

                <ul className="filetree-wrapper">
                    {this.state.treeview.map((item, i) => (
                        <Treenode data={item} key={i} />
                    ))}
                </ul>
            </section>

        )
    }

}
