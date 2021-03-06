import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home as HomeComponent } from './component/HomeComponents/homeComponent';
import { LoginComponent } from './component/HomeComponents/LoginComponent';
import { BoardComponent } from './component/DashBoardComponents/boardComponent'

function App(props){
 
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component= {() => <HomeComponent auth = {false}/>}></Route>
                <Route exact path = '/login' component = { LoginComponent }></Route>
                <Route path = '/profile' component= { BoardComponent }></Route>
            </Switch>
        </Router>
    );
}


export default App;
