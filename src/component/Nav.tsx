import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
// @ts-ignore
// import x from '../icons/money.svg';  //先走 svgo-loader  => svg-sprite-loader
require('../icons/money.svg')
require('../icons/tag.svg')
require('../icons/chart.svg')

// 使用import引用 一定要加 console.log()  不然 图标也会不见
// 涉及到  TreeShaking ，如果没有用到，将会用 TreeShaking， 将没有用的代码从树上摇下来， 自动删除 没有用的代码
// 但是 TreeShaking 不适用于 require函数中


const NavWrapper = styled.nav`
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  > ul {
    display: flex;
     > li {
       width: 33.3%;
       text-align: center;
       font-weight: 500;
       display: flex;
       flex-direction: column;
       padding: 6px 0;
       align-items: center;
       .icon {
         width: 24px;
         height: 25px;
       }
     }
  }
`

const  Nav = () => {
    return(
        <NavWrapper>
            <ul>
                <li>
                    {/*<Icon name='tag' />*/}
                    <svg className='icon'>
                        <use xlinkHref='#tag'/>
                    </svg>

                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg className='icon'>
                        <use xlinkHref='#money'/>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg fill="red" className='icon'>
                        <use xlinkHref='#chart'/>
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>

    )
}


export default Nav