import React, {Component} from 'react';
import Mensagem from './components/Mensagem';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Digite seu nome...'
        }
    }

    handlerChange = (e) => {
        console.log(e.target.value)
        let message = (e.target.value === '') ? 'Digiter seu nome... ' : 'Olá,  ' + e.target.value; 
        this.setState({...this.state, message: message });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handlerChange}/>
                <Mensagem  message={this.state.message}/>
            </div>
        );
    }
}

export default App;
