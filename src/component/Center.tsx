import styled from "styled-components";

const Center = styled.div`
  display: flex;            //flex 默认是左右结构，所以加Span标签时不会有高度，必须将flex改为上下结构
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export {Center}