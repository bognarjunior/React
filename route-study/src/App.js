import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';
import View4 from './components/View4';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header>
                <Link to="/"> Page 1</Link>
                <Link to="/page2"> Page 2</Link>
                <Link to="/page3"> Page 3</Link>
                <Link to="/page4"> Page 4</Link>
            </header>
                
            <main>
                <Switch>
                    <Route exact path="/" component={View1}/>
                    <Route path="/page2" component={View2}/>
                    <Route path="/page3" component={View3}/>
                    <Route path="/page4" component={View4}/>
                </Switch>
            </main>

            <footer>
                Estudo de React Router
            </footer>
        </div>
        );
    }
}

export default App;
