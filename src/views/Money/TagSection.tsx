import styled from "styled-components";
import React, {useState} from 'react'
import {initialize} from "jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit";


const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
      margin: 0 -12px;
    > li {
      display: inline-block;
      background: #D9D9D9;
      border-radius: 18px;
      padding: 4px 18px;
      font-size: 14px;
      color: #545454;
      font-weight: 500;
      margin: 8px 12px;
      &.selected {
        background: #fabf00;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 2px solid #333;
    color: #666;
    margin-top: 8px;
  }
  
`
// TS => 在声明变量后面加冒号和函数类型
// 类型有 FunctionComponent（简写：FC） ， string ， number ， boolean

const TagSection: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    const [selectedTages, setSelectedTages] = useState<string[]>([])

    const onAddTag = () => {
        const tagName = window.prompt( '新标签的名字是')
        if(tagName !== null) {
            setTags([...tags, tagName]) // 将原来的tags 拷贝过来，将新的 tagName 放到后面
        }
    }
    const onToggleTag = (tag: string) => {
        const index = selectedTages.indexOf(tag)  //查看tag 在不在 selectedTages 里面
        if(index >= 0) {
            //如果 tag 已被选中，就复制所有没有被选中的 tag ，作为新的 selectedTag
            setSelectedTages( selectedTages.filter(t => t !== tag) )  //记住这种语法
        }
        else {
            setSelectedTages([...selectedTages, tag]) //没有被选中会返回新的数组
        }
    }

    return (
        <Wrapper>
            <ol>
                {/* 每次 map 遍历完都要加上 key ，因为tag不会重复，所以可以作为 key，不能用 index*/}
                { tags.map(tag =>                                //给 li 添加className，如果被选中，返回 selected ，没有的话返回空字符串
                    <li key={tag} onClick={()=>onToggleTag(tag)} className={selectedTages.indexOf(tag)>=0 ? 'selected' : ''}>
                        {tag} </li>   //选择或者取消标签,,箭头函数表示点击执行箭头函数，然后再传 tag 的值
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}


export {TagSection}