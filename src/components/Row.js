import React from "react"
import Col from "./Col"


export default class Row extends React.Component {
   
    render() {
        
      return (
        <div id="" className="TTT--row" >
         <Col row={this.props.row} col="1" />
         <Col row={this.props.row} col="2" />
         <Col row={this.props.row} col="3" />
        </div>
        
        );
    }
}