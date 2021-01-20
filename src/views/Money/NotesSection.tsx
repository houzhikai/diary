import styled from "styled-components";


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
export {NotesSection}