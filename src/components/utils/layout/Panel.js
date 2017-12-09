import React from 'react';
import Layout from './Layout';

export default class Panel extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            components: this.getChildren()
        }
    }

    getChildren(){
        var {children} = this.props;
        var result = [];

        if(!(children instanceof Array)){
            children = [children]
        }

        return children;
    }

    dragStart(e){
        var node = e.currentTarget;
        var id = node.getAttribute("data-key");

        e.dataTransfer.setData('text', id);
    }

    drop(e){
        e.preventDefault();
        var start = e.dataTransfer.getData('text');
        var end = e.currentTarget.getAttribute('data-key');

        if(start == end) return;

        this.setState({
            ...this.state,
            components: this.swapArray(start, end)
        });
    }

    allowDrop(e){
        e.preventDefault();
    }

    swapArray(a, b){
        var result = this.state.components.slice();

        result[a] = result.splice(b, 1, result[a])[0];
        return result;
    }

    render(){

        return (
            <Layout className="panel" type="vertical" style={this.props.style}>
                {this.state.components.map((Component, i) => (
                    <div onDragOver={this.allowDrop.bind(this)}>
                        <h2 onDragStart={this.dragStart.bind(this)}
                            draggable="true"
                            data-key={i}>{(Component.props.name ? Component.props.name : 'Inconnue')}</h2>

                        <div className="module-content" onDrop={this.drop.bind(this)} data-key={i}>
                            {Component}
                        </div>
                    </div>
                ))}
            </Layout>
        )

    }
}
