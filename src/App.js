import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import List from './List';
import Checked from './Checked';
import Unchecked from './Unchecked';
//test
function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/unchecked' component={Unchecked} />
                    <Route path='/checked' component={Checked} />
                    <Route path='/' component={List} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;