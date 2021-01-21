import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";
// @ts-ignore
// import x from '../icons/money.svg';  //先走 svgo-loader  => svg-sprite-loader


// 使用import引用 一定要加 console.log()  不然 图标也会不见
// 涉及到  TreeShaking ，如果没有用到，将会用 TreeShaking， 将没有用的代码从树上摇下来， 自动删除 没有用的代码
// 但是 TreeShaking 不适用于 require函数中


const NavWrapper = styled.nav`
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
  background: #fff;
  > ul {
    display: flex;
     > li {
       width: 33.3%;
       text-align: center;
       > a {
         display: flex;
         flex-direction: column;
         padding: 6px 0;
         font-weight: 500;
         align-items: center;
         .icon {
           width: 24px;
           height: 25px;
         }
         &.selected {
           color:  #fabf00;
           .icon {
             fill:  #fabf00;
           }
         }
       }
     }
  }
`

const  Nav = () => {
    return(
        <NavWrapper>
            <ul>
                <li>
                    {/*在 element 中被选中的a标签才可以显示 class=“selected” 类*/}
                    {/*有了activeClassName 属性就可以去css中添加样式*/}
                    <NavLink to="/tags"  activeClassName="selected">
                        <Icon name="tag" />
                        标签页
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money" />
                        记账
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart" />
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>

    )
}


export default Nav