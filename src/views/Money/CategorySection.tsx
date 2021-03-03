import React, {useState} from "react";
import styled from "styled-components";


const Wrapper = styled.section`
  font-size: 24px;
  background:#f9db61;
  > ul {
    display: flex;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`
type Props = {
    value: '-' | '+';
    onChange: (value: '-' | '+')=>void;
    className?: string
}

const CategorySection: React.FC<Props> = (props) => {
    const stateMap = {'-':'支出', '+':'收入'}
    type states = keyof typeof stateMap
    const [stateList] = useState<states[]>(['-','+'])

    return (
        <Wrapper>
            <ul className={props.className? props.className:""}>
                {stateList.map(item =>
                    <li key={item}
                        className={props.value===item ? "selected":""}
                        onClick={()=> props.onChange(item)}>
                        {stateMap[item]}
                    </li>
                )}
            </ul>
        </Wrapper>
    )
}

export default CategorySection