import React from "react";
import Row from "./Row";

export default class Tictactoe extends React.Component {
    constructor(){
        super()
        this.state={
            values : [
                [null,null,null],
                [null,null,null],
                [null,null,null],
            ],            
            players:[
                {
                    name: "player1",
                    sign: "X"
                },
                {
                    name: "player2",
                    sign: "O"
                }
            ],
            status: 0,
            winner: null,            
        }
    }
        
    
        updateValue(rowNum,colNum){
            var currentPlayer = this.state.status;            
           
            var temparray = [ ...this.state.values[rowNum] ];            
            temparray.splice(colNum, 1, this.state.players[currentPlayer].sign);
            //Change player
            if(currentPlayer == 0){
                this.setState({status: 1});
            }
            else this.setState({status: 0});
            
            var values = [ ...this.state.values ] ;
            values.splice(rowNum,1, temparray);
            this.setState({values: values});
            //console.log(values);
            //console.log(this.state.values);
            this.checkWinner(values, this.state.players[currentPlayer],rowNum,colNum);
            this.checkIfAnyMovePossible(values);
        }

        checkIfAnyMovePossible(matrixToCheck){
            console.log(matrixToCheck)
            var possible = false;
            var temp;
            for(var i=0;i<3;i++){
                for(var j=0; j<3;j++){ 
                    //console.log("ra"+matrixToCheck[i][j]+" ")
                    if(matrixToCheck[i][j] == null){
                        possible = true;
                        break;
                        }
                        console.log(possible)
                        //console.log("ra"+matrixToCheck[1][1]+" ");}}}
                    }}
            if(!possible)
                this.setState({winner:"remis"});     
                        
        }            
                
            
        checkWinner(matrixToCheck,whoMoved,rowNum,colNum){                
            
            if(
                (matrixToCheck[rowNum][0] == whoMoved.sign) &&
                (matrixToCheck[rowNum][1] == whoMoved.sign) &&
                (matrixToCheck[rowNum][2] == whoMoved.sign)              
            )
            this.setState({winner : whoMoved.name})

            else if(
                (matrixToCheck[0][colNum] == whoMoved.sign) &&
                (matrixToCheck[1][colNum] == whoMoved.sign) &&
                (matrixToCheck[2][colNum] == whoMoved.sign)              
            )
            this.setState({winner : whoMoved.name})

            else if(
                (
                    (matrixToCheck[0][0] == whoMoved.sign) &&
                    (matrixToCheck[1][1] == whoMoved.sign) &&
                    (matrixToCheck[2][2] == whoMoved.sign)    
                )  ||  
                (
                    (matrixToCheck[0][2] == whoMoved.sign) &&
                    (matrixToCheck[1][1] == whoMoved.sign) &&
                    (matrixToCheck[2][0] == whoMoved.sign)    
                )    
            )
            this.setState({winner : whoMoved.name})          
        }
        reset(){
            this.setState({winner: null});
            let temporaryarray = [
                [null,null,null],
                [null,null,null],
                [null,null,null],
            ]
            this.setState({values: temporaryarray});
            this.setState({status: 0})

        }
    render() {if(!this.state.winner)
      return (
        <div className="TTT" id="ttt"  >
         <Row  className="TTT--row" row="0" updateValue={this.updateValue.bind(this)} values={this.state.values[0]} />
         <Row  className="TTT--row" row="1" updateValue={this.updateValue.bind(this)} values={this.state.values[1]} />
         <Row  className="TTT--row" row="2" updateValue={this.updateValue.bind(this)} values={this.state.values[2]} />
         <div>następny ruch wykonuje {this.state.players[this.state.status].name}</div>
         
        </div>
        
        );
        else 
        return(
            <div className="TTT" id="ttt"  >
                <div>
                Koniec gry {this.state.winner} <button onClick={this.reset.bind(this)}>reset</button>
                </div>   
                <Row  className="TTT--row" row="0" values={this.state.values[0]} status={this.state.winner}/>
                <Row  className="TTT--row" row="1" values={this.state.values[1]} status={this.state.winner}/>
                <Row  className="TTT--row" row="2" values={this.state.values[2]} status={this.state.winner}/>
            </div>
        );
    }
}
  