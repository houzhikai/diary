import React from 'react';
import Nav from "./component/Nav";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from "styled-components";

const Warpper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column; //上下模式，flex默认的是左右模式
`
const Main = styled.main`
  flex-grow: 1;  //尽量地高
  overflow: auto; //页面超出在上面的区域，不会出现在下面的导航栏里
`


 function App() {
    return (
        <Router>
            <Warpper>

                <Main>
                    <Switch>
                        <Route path="/tags" component={Tags} />

                        <Route path="/money" component={Money} />

                        <Route path="/statistics" component={Statistics} />

                        <Redirect exact from="/" to="/money" />

                        <Route path="*" component={NoMatch} />
                    </Switch>
                </Main>

               <Nav />

            </Warpper>
        </Router>
    );
}

function Tags() {
    return <h2>标签页面</h2>;
}

function Money() {
    return <h2>记账页面</h2>;
}

function Statistics() {
    return <h2>统计页面</h2>;
}

function NoMatch() {
     return <h2>404 找不到页面 </h2>
}
export default App