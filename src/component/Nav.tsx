import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";


const NavWrapper = styled.nav`
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  > ul {
    display: flex;
     > li {
       width: 33.3%;
       text-align: center;
       padding: 16px;
       font-size: 20px;
       font-weight: 800;
     }
  }
`

const  Nav = () => {
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>

    )
}


export default Nav