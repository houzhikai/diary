import styled from "styled-components";
import React, {useRef} from "react";

const Wrapper = styled.section`
  padding: 10px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;
      white-space: nowrap;  //防止 前面的 备注 字样变成竖着的字样
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
      
    }
  }
`
type Props = {
    value: string,
    onChange: (value: string) => void
}

const NoteSection:React.FC<Props> =(props) => {
    const note = props.value
    const refInput = useRef<HTMLInputElement>(null)
    const x = () => {
        if(refInput.current !== null) {
            props.onChange(refInput.current.value)
        }
    }

    return(
        <Wrapper>
            <label>
                <span>备注</span>
                {/*  首先要将 input 改成受控组件 ， 添加value 和 onChang*/}
                {/*<input type="text" placeholder='请添加备注' value={note} onChange={e => setNote(e.target.value)}/>*/}

                {/* 非受控组件的写法  onBlur 当鼠标移出后返回值  使用onChange 输入一个字就返回值*/}
                <input type="text" placeholder='请添加备注'
                       ref = {refInput}
                       defaultValue={note}
                       onBlur={x}/>
            </label>
        </Wrapper>
    )
}
export {NoteSection}