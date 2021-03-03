import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";

const Wrapper =  styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  background-color: #fff;
  >ul{
    display: flex;
    >li{
      width: 33.33333%;
      padding: 4px 0;
      text-align: center;
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .icon{
        width: 22px;
        height: 22px;
      }
      .selected{
        color: #ffda44;
        .icon{
          fill: #ffda44;
        }
      }

    }
  }
`

const Nav = ()=>{
    return (
        <Wrapper>
            <ul>
                <li>
                    <NavLink to="/detail" activeClassName="selected">
                        <Icon name="detail" />
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected" exact>
                        <Icon name="money" />
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics" />
                        图表
                    </NavLink>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Nav;