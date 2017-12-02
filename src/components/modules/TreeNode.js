import React from 'react';

export default class TreeNode extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        var {data} = this.props;

        if(data.nodes){
            return (
                <li>
                    <span>{data.name}</span>
                    <ul>
                        {data.nodes.map((item, i) => (
                            <TreeNode key={i} data={item} />
                        ))}
                    </ul>
                </li>
            )
        } else {
            return (
                <li><span>{data.name}</span></li>
            )
        }


    }
}
