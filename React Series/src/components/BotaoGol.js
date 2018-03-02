import React from "react";

class BotaoGol extends React.Component {
    
    handleClick = (event) => {
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return(
            <button onClick={this.handleClick}>Gol!</button>
        )
    }
}

export default BotaoGol;