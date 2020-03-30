import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableView from "../src/components/TableView";

class Trex extends Component {

    state = {
        //fake data for now
        cups: [{tableid : 1, cupid : 1, level : .2},
                {tableid : 1, cupid : 2, level : .2},
                {tableid : 12, cupid : 1, level : .2},
                {tableid : 23, cupid : 1, level : .2}]
    };


    render(){
        return(
            <div className="container">
                <h1 className="title">Trex </h1>
                    
                    <TableView cups = {this.state.cups}  />

            </div>
        );
    }
}

export default Trex;