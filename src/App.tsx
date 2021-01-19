import React from 'react';
import Nav from "./component/Nav";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Layout from "./component/layout";




 function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags" component={Tags} />

                <Route path="/money" component={Money} />

                <Route path="/statistics" component={Statistics} />

                <Redirect exact from="/" to="/money" />

                <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
    );
}

function Tags() {
  return (
    <Layout>
        <h2>标签页面</h2>
    </Layout>
  )
}

function Money() {
    return (
        <Layout>
            <h2>记账页面</h2>
        </Layout>
    )
}

function Statistics() {
    return (
        <Layout>
            <h2>统计页面</h2>
        </Layout>
    )
}

function NoMatch() {
     return <h2>404 找不到页面 </h2>
}
export default App