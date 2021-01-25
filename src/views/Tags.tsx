import Layout from "../component/layout";
import React from "react";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";
import Icon from "../component/icon";
import { Link } from "react-router-dom";
import {Button} from "../component/Button";
import {Center} from "../component/Center";
import {Space} from "../component/Space";

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
function Tags() {
    const {tags ,addTag} = useTags()
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
                <Space />
                <Space />
                <Space />
                <Button onClick={addTag}>新增标签</Button>
            </Center>

        </Layout>
    );
}
export default Tags