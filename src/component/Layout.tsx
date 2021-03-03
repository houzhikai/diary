//上面的布局

import Nav from "./Nav";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; //上下模式，flex默认的是左右模式
`
const Main = styled.main`
  flex-grow: 1;  //尽量地高
  overflow: auto; //页面超出在上面的区域，不会出现在下面的导航栏里
`
type Props = {
    className?: string,
    scrollTop?: number
}

const Layout: React.FC<Props> = (props: any) => {
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(()=> {
        if(!mainRef.current) {return}
       mainRef.current.scrollTop = props.scrollTop!  //  ! 意思是前面的值不可能为空
    },[props.scrollTop])
    return (
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav />
        </Wrapper>
    )
}
Layout.defaultProps = {
    scrollTop: 0
}
export default Layout