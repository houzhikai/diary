import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Money from "./views/Money";
import {Tags} from "./views/Tags";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";
import {Detail} from "./views/Detail";
import Tag from './views/Tag'
import {Statistics} from './views/Statistics/Statistics'

//所有的字的默认颜色是 #333
const AppWrapper = styled.div`
  color: #333;
`
 function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tags/:id" exact component={Tag} />

                    <Route path="/tags" component={Tags} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/money" component={Money} />
                    <Route path="/statistics" component={Statistics} />
                    <Redirect exact from="/" to="/detail" />

                    <Route path="*" component={NoMatch} />
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App