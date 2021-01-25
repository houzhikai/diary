import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {useTags} from "../hooks/useTags";
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
  padding: 4px 12px;
  margin-top: 8px;
  background: #fff;
`
const TagEdit:React.FC =() => {
    // const {tags} = useTags()
    const {findTag, updateTag, deleteTag} = useTags()
    let {id: idString} = useParams<Params>()
    const tag = findTag(parseInt(idString))

    const tagContent = (tag: {id:number, name:string}) => (
        <div> {/*复用代码*/}
            <InputWrapper>
                <Input label='标签名：' type='text' placeholder='在此处记录信息' value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value})
                       }}/>
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    )
    const history = useHistory()
    const oncClickBack = () => {
        history.goBack()
    }
    // const tag = tags.filter(tag => tag.id === parseInt(id))[0]  //找ID的过程
    return(
        <Layout>
            <Topbar>
                <Icon name='left'  onClick={oncClickBack} />
                    <span>编辑标签</span>
                <Icon />
            </Topbar>

            { tag ? tagContent(tag) : <div>tag 不存在</div> }
        </Layout>
    )
}
export {TagEdit}