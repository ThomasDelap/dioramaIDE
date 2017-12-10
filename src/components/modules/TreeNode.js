import React from 'react';

export default class TreeNode extends React.Component {

   constructor(props){
       super(props);

       this.state = {
           active: this.props.active ? this.props.active : false,
           open: false
       };
   }

   handleToggleActive(e){

       this.setState({
           ...this.state,
           active: !this.state.active
       });
   }

   handleClickAction(data, e){

       this.props.handleAction(data);
   }

   render(){
       var {data} = this.props;
       const size = (data.depth * 16) + 16;


       if(data.nodes){

           return (
               <li className={this.state.active ? 'is-active': ''}>
                   <span
                       onClick={this.handleToggleActive.bind(this)}
                       className={'icon ' + (this.state.active ? 'icon-arrow-down' : 'icon-arrow-left')}
                       style={{paddingLeft: size}}><i className="icon icon-folder"></i>{data.name}</span>
                   <ul>
                       {data.nodes.map((item, i) => (
                           <TreeNode key={i} data={item} handleAction={this.props.handleAction} />
                       ))}
                   </ul>
               </li>
           )
       } else {

           return (
               <li className={this.state.open ? 'is-open': ''}>
                   <span
                       onDoubleClick={this.handleClickAction.bind(this, data)}
                       className={'icon icon-module ' + data.type}
                       style={{paddingLeft: size + 15}}>{data.name}</span>
               </li>
           )
       }
   }
}
