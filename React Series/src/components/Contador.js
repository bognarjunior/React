import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
    }

    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h1> { this.state.contador } </h1>
                <div>
                    <button onClick={this.decrementar}> Decrementar </button>
                    <button onClick={this.incrementar}> Incrementar </button>
                </div>
            </div>
        );
    }
};

export default Contador;