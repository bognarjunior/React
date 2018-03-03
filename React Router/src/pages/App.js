import React, { Component } from 'react';
import { Link, IndexLink} from 'react-router';

class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar has-shadow">
                    <div className="navbar-brand"> 
                        <IndexLink 
                            className="navbar-item is-tab" to="/" 
                            activeClassName="is-active">Home</IndexLink>
                        <Link 
                            className="navbar-item is-tab" to="/cursos" 
                            activeClassName="is-active">Cursos</Link>
                        <Link 
                            className="navbar-item is-tab" to="/sobre" 
                            activeClassName="is-active">Sobre</Link>
                    </div>
                </nav>
                <section className="section">
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}

export default App;