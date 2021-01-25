import styled from "styled-components";
import React, {useState} from "react";


const Wrapper = styled.section`
  font-size: 24px;
    >ul {
      display: flex;
      >li {
        width: 50%;
        text-align: center;
        background: #fabf00;
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
type Props = {
    value: '-' | '+',
    onChange: (value: '-'|'+')=> void
}
const CategorySection:React.FC<Props> = (props) => {
    const categoryMap = {'-':'支出', '+':'收入'}
    const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
    const category = props.value

    return (
        <Wrapper>
            <ul>
                {categoryList.map(c=>
                <li key={c} className={category === c ? 'selected' : ''}
                onClick={()=> {props.onChange(c)}}
                > {categoryMap[c]}
                </li>)}
                {/*  如果不想写重复的代码，可以用另一种方法*/}
                {/*<li className={category === '-' ? 'selected' : ''} onClick={()=>setCategory('-')}>支出</li>*/}
                {/*<li className={category === '+' ? 'selected' : ''} onClick={()=>setCategory('+')}>收入</li>*/}
            </ul>
        </Wrapper>
    )
}


export {CategorySection}