import React from "react"

export default class Row extends React.Component {
    handleClick() {
        if(
            this.props.value == null)
            
            {
            console.log(this.props);
            this.props.updateValue(this.props.row,this.props.col);
        }   
        
    }
    
    render() {       
      return (
            <div className="TTT--col" row={this.props.row} col={this.props.col} onClick={this.handleClick.bind(this)}>
            <div>{this.props.value}</div>       

        </div>
        
        );
    }
}