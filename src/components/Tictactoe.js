import React from "react";
import Row from "./Row"

export default class Tictactoe extends React.Component {
    constructor(){
        super()
        this.state={}

    }
    render() {
      return (
        <div className="TTT" id="ttt">
         <Row className="TTT--row" row="1" />
         <Row className="TTT--row" row="2" />
         <Row className="TTT--row" row="3" />
        </div>
        
        );
    }
}
  