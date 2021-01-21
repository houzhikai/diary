import React from "react";
import { useParams } from "react-router-dom";
import {useTags} from "../useTags";
import Layout from "../component/layout";
import Icon from "../component/icon";
import {Button} from "../component/Button";
import styled from "styled-components";
import {Input} from "../component/Input";
import {Space} from "../component/Space";
import {Center} from "../component/Center";

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`
const InputWrapper = styled.div`
  padding: 12px;
  margin-top: 8px;
  background: #fff;
`
const TagEdit:React.FC =() => {
    // const {tags} = useTags()
    const {findTag} = useTags()
    let {id} = useParams<Params>()

    // const tag = tags.filter(tag => tag.id === parseInt(id))[0]  //找ID的过程
    const tag = findTag(parseInt(id))
    return(
        <Layout>
            <Topbar>
                <Icon name='left' />
                    <span>编辑标签</span>
                <Icon />
            </Topbar>
            <InputWrapper>
                <Input label='备注：' type='text' placeholder='在此处记录信息' />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}
export {TagEdit}