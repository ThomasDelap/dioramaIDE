import React from 'react';

export default class Layout extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            resizing: false,
            parent: null,
            actual: null,
            ratio: this.getInitial()
        }
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.handleResize.bind(this));
        window.removeEventListener('mouseup', this.mouseUp.bind(this));
    }

    getInitial(){
        var {children} = this.props;
        var result = [];

        if(!(children instanceof Array)){
            children = [children]
        }

        children.forEach((item, i) => {
            var {props} = item;

            if(props['init-ratio'] != null){

                if(props['init-ratio'].includes('%')){
                    result.push(props['init-ratio']);
                } else {
                    result.push(parseInt(props['init-ratio']) + 'px');
                }
            } else {
                result.push('null');
            }
        });

        return result;
    }

    getChildren(){
        var {children, type} = this.props;
        var result = [];

        if(!(children instanceof Array)){
            children = [children]
        }

        children.forEach((item, i) => {
            const Splitter = () => { return <hr
                onMouseDown={this.toggleResize.bind(this, i)}
                onMouseUp={this.mouseUp.bind(this)} /> };

            var props = {key: result.length, style: {flexBasis: this.state.ratio[i]}};

            result.push(React.cloneElement(item, props));
            if(i != children.length - 1)
                result.push(<Splitter key={result.length} />)
        });

        return result;
    }

    /*
     * @description Manage the start of the splitter, active, give parent.
     * @params event e
     */
    toggleResize(key, e){

        this.setState({
            ...this.state,
            actual: key,
            parent: e.currentTarget.parentElement,
            resizing: true
        }, () => {

            window.addEventListener('mousemove', this.handleResize.bind(this));
            window.addEventListener('mouseup', this.mouseUp.bind(this));
        });
    }

    /**
     * @description Prevent mouse up lag
     * @params event e
     */
    mouseUp(e){

        this.setState({
            ...this.state,
            resizing: false,
            parent: null,
            actual: null
        }, () => {
            window.removeEventListener('mousemove', this.handleResize.bind(this));
            window.removeEventListener('mouseup', this.mouseUp.bind(this));
        });
    }

    /*
     * @description Manage the width of the new size
     * @params event e
     */
    handleResize(e){

        if(this.state.resizing){
            var {ratio, actual, parent} = this.state;
            var parentBox = this.state.parent.getBoundingClientRect();
            var children = Array.from(parent.children).filter((item) => {
                return item.nodeName == 'DIV';
            });
            var newRatio = 0;

            console.log((children[actual].offsetLeft - parent.offsetLeft))
            if(this.props.type == 'vertical'){
                newRatio = ((e.clientY - parentBox.top)) - (children[actual].offsetTop - parent.offsetTop);
            } else {
                newRatio = ((e.clientX - parentBox.left)) - (children[actual].offsetLeft - parent.offsetLeft);
            }

            ratio[actual] = newRatio;

            this.setState({
                ...this.state,
                ratio
            });
        }
    }

    render(){

        return (

            <div className={this.props.className.concat(' layout') + (this.props.type == 'vertical' ?  ' layout-vertical' : '')} style={this.props.style}>
                {this.getChildren()}
            </div>

        )
    }

}
