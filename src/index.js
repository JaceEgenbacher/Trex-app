import React, { Component } from "react";
import ReactDOM from "react-dom";

class TableView extends Component {
    render(){
        return(
            <div className="title">Tables</div>
        );
    }
}

ReactDOM.render(<TableView />, document.getElementById("root"));