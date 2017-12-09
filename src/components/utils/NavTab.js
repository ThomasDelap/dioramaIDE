import React from 'react';

export default class NavTab extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            active: false
        };
    }

    handleClick(e){

        this.setState({
            ...this.state,
            active: !this.state.active
        });

        /*
        var electron = window.require('electron');
        electron.remote.getCurrentWindow().toggleDevTools();*/
    }

    render(){
        return (

            <span className={"nav-item" + (this.state.active ? ' is-active': '')}>
                <a onClick={this.handleClick.bind(this)}>{this.props.name}</a>
                {this.props.tabs &&
                    <ul className="menu-sub">
                        {this.props.tabs.map((group, i) => (
                            <ul className="menu-sub-group" key={i}>
                                {group.map((item, j) => (
                                    <li className={item.disabled ? 'is-disabled': ''} key={j}>{item.name}
                                        {item.shortcut && <span className="menu-shortcut">{item.shortcut}</span> }
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </ul>
                }
            </span>

        )
    }
}
