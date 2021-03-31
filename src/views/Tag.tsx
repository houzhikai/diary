import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useTags} from '../hooks/useTags'
import styled from 'styled-components'
import {Topbar} from './Money/CSS/Topbar'
import Icon from '../component/icon'
import {Input} from '../component/Input'
import {BtnBox} from './Money/CSS/BtnBox'
import {Button} from '../component/Button'

const InputWrapper = styled.div`
  background-color: #fff;
  padding: 0 16px;
  margin-top: 8px;
`
type Params = {
    id: string
}
type MoneyType = '-' | '+'
const Tag: React.FC = () => {
    const {updateTag, findTag, deleteTag} = useTags()
    let {id} = useParams<Params>()
    const tag = findTag(id)
    const history = useHistory()

    const tagContent = (tag: { id: number, name: string, type: MoneyType, icon: string }) => (  //注意 这里是 小括号
        <div>
            <InputWrapper>
                <Input label='标签名' value={tag.name} type='text' placeholder='标签名'
                       onChange={(e) => {
                           updateTag(tag.id, tag.type, tag.icon, {name: e.target.value})
                       }}/>
            </InputWrapper>
            <BtnBox>
                <Button onClick={() => {
                    deleteTag(tag.id)
                    setTimeout(() => {
                        history.goBack()
                    }, 0)
                }}>删除标签</Button>
            </BtnBox>
        </div>
    )

    return (
        <div>
            <Topbar>
                <Icon name='left' onClick={() => history.goBack()}/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {
                tag ? tagContent : <div>删除成功！</div>
            }
        </div>
    )
}
export {Tag}