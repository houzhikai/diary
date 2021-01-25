import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../component/Input";

const Wrapper = styled.section`
  padding: 14px 16px;
  font-size: 14px;
`
type Props = {
    value: string,
    onChange: (value: string) => void
}

const NoteSection: React.FC<Props> =(props) => {
    const note = props.value
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
            props.onChange(e.target.value)
        }

    return(
        <Wrapper>
            <Input label='备注：' type='text' value={note} onChange={onChange} placeholder='在此处记录信息'/>
            {/*<label>*/}
            {/*    <span>备注</span>*/}
            {/*    /!*  首先要将 input 改成受控组件 ， 添加value 和 onChang*!/*/}
            {/*    /!*<input type="text" placeholder='请添加备注' value={note} onChange={e => setNote(e.target.value)}/>*!/*/}

            {/*    /!* 非受控组件的写法  onBlur 当鼠标移出后返回值  使用onChange 输入一个字就返回值*!/*/}
            {/*    <input type="text" placeholder='请添加备注'*/}
            {/*           ref = {refInput}*/}
            {/*           defaultValue={note}*/}
            {/*           onBlur={x}/>*/}
            {/*</label>*/}
        </Wrapper>
    )
}
export {NoteSection}