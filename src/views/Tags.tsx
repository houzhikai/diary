import Layout from "../component/layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../component/icon";
import { Link } from "react-router-dom";

const TagList = styled.ol`
  background: #ffffff;
  >li {
    border-bottom: 1px solid #dfdfdf;
    line-height: 20px;
    margin: 0 18px;
    >a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #ffc300;
  color: #222;
  border-radius: 6px;
`
const Center = styled.div`
  display: flex;            //flex 默认是左右结构，所以加Span标签时不会有高度，必须将flex改为上下结构
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Space = styled.div`
  height: 48px;
`
function Tags() {
    const {tags} = useTags()
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            <span className='oneLine'>{tag.name}</span>
                            <Icon name='right'/>
                        </Link>
                    </li>)}
            </TagList>
            <Center>
                <Space> </Space>
                <Button>新增标签</Button>
            </Center>

        </Layout>
    )
}
export default Tags