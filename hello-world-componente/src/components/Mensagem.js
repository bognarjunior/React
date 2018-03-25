import React, {Component} from 'react';

export class Mensagem extends Component {
    render() {
        return ( 
            <div className = "App" > 
                <h1>{this.props.message}</h1> 
            </div>
        )
    }
};

export default Mensagem;