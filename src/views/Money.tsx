import Layout from "../component/layout";
import React from "react";
import styled from "styled-components";


const TagSection = styled.section`
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
const NotesSection = styled.section`
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
const CategorySection = styled.section`
  font-size: 24px;
    >ul {
      display: flex;
      >li {
        width: 50%;
        text-align: center;
        background: #c4c4c4;
        padding: 18px 0;
        position: relative;
        &.selected::after {    //不建议直接在 selected 上直接加 border，因为它会占用体积，使得上下高度不一致
          content: '';
          display: block;
          height: 3px;
          background: #333;
          position: absolute;
          width: 100%;
          left: 0;  //默认都要加上这句话
          bottom: 0;
        }
      }
    }
`
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;//上下布局
  > .output {
    
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    //                往上提5px  往后缩5px
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.3);  //内阴影  只有下面有阴影
  }
  > .pad { //面板
    
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;  //高度固定
      border: none;
      &.OK {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #dfdfdf;
      } 
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
    }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #8b8b8b;
      }&:nth-child(14) {
        background: #9a9a9a;
      }
   }
  }
`
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    // @ts-ignore
    return (
        <MyLayout className=''>
            <TagSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagSection>

            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder='请添加备注'/>
                </label>
            </NotesSection>

            <CategorySection>
                <ul>
                    <li className='selected'>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>

            <NumberPadSection>
                <div className='output'>
                    100
                </div>
                <div className='pad clearfix'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className='OK'>OK</button>
                    <button className='zero'>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>

        </MyLayout>
    )
}
export default Money