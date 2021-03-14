import React from "react";
import styled from "styled-components";
import Icon from '../../component/icon'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px 0;
  flex-direction: column;
  .icon{
    font-size: 60px;
  }
  .title{
    color: #999;
  }
`
const NoPage = () => {
    return (
        <Wrapper>
            <div><Icon name='NoPage'/></div>
            <div className='title'>暂无数据</div>
        </Wrapper>
    );
}

export default NoPage;