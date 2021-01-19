import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";

 function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags" component={Tags} />

                <Route path="/money" component={Money} />

                <Route path="/statistics" component={Statistics} />

                <Redirect exact from="/" to="/tags" />

                <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
    );
}

export default App