import React from "react"
import Col from "./Col"


export default class Row extends React.Component { 
    zupdateValue(a,b){
       this.props.updateValue(a,b);
    }

    render() {
       
        
        console.log(this.zupdateValue);
        //this.props.setvalue;
        //setTimeout(()=>this.zupdateValue(0,1), 2000)
      if(!this.props.status)  
      return (
        <div id="" className="TTT--row"  >
            <Col row={this.props.row} col="0" value={this.props.values[0]} updateValue={this.zupdateValue.bind(this)}/>
            <Col row={this.props.row} col="1" value={this.props.values[1]} updateValue={this.zupdateValue.bind(this)}/>
            <Col row={this.props.row} col="2" value={this.props.values[2]} updateValue={this.zupdateValue.bind(this)}/>
        </div>            
        );
        else 
        return (
            <div id="" className="TTT--row"  >
                <div className="TTT--col" row={this.props.row} col="0"><div>{this.props.values[0]}</div></div>
                <div className="TTT--col" row={this.props.row} col="1"><div>{this.props.values[1]}</div></div>
                <div className="TTT--col" row={this.props.row} col="2"><div>{this.props.values[2]}</div></div>
            </div>  ) 

    }
}