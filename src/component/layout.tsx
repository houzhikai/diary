import Nav from "./Nav";
import React from "react";
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

const Layout = (props: any) => {
    return (
        <Warpper>
            <Main>
                {props.children}
            </Main>
            <Nav />
        </Warpper>
    )
}
export default Layout