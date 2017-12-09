import React from 'react';

export default class TreeNode extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            active: this.props.active ? this.props.active : false
        };
    }

    handleToggleActive(e){

        this.setState({
            ...this.state,
            active: !this.state.active
        });
    }

    handleClickAction(e){
        // Ouvrir fichier

    }

    render(){
        var {data} = this.props;
        const style = {paddingLeft: data.depth * 16};

        if(data.nodes){

            return (
                <li className={this.state.active ? ' is-active': ''}>
                    <span
                        onClick={this.handleToggleActive.bind(this)}
                        className={'icon ' + (this.state.active ? 'icon-arrow-down' : 'icon-arrow-left')}
                        style={style}><i className="icon icon-folder"></i>{data.name}</span>
                    <ul>
                        {data.nodes.map((item, i) => (
                            <TreeNode key={i} data={item} />
                        ))}
                    </ul>
                </li>
            )
        } else {

            return (
                <li>
                    <span
                        onClick={this.handleClickAction.bind(this)}
                        className={'icon icon-' + data.type}
                        style={style}>{data.name}</span>
                </li>
            )
        }


    }
}
