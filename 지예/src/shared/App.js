import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Menu />
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;