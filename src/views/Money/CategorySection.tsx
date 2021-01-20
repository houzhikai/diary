import styled from "styled-components";


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
export {CategorySection}