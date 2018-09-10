import React from "react"

export default class Row extends React.Component {
   
    
    render() {
        //console.log(this.props)
      return (
          console.log(this.props),
        <div className="TTT--col" >
          row:{this.props.row}   
          col:{this.props.col}
        </div>
        
        );
    }
}