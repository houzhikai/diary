import styled from "styled-components";


const Wrapper = styled.section`
  display: flex;
  flex-direction: column; //上下布局
  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    //                往上提5px  往后缩5px
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.3), //内阴影  只有下面有阴影
                inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad { //面板

    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px; //高度固定
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
      }

      &:nth-child(14) {
        background: #9a9a9a;
      }
    }
  }
`
export {Wrapper}