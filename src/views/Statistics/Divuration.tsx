import React, {useState} from 'react'
import styled from 'styled-components'


const Wrapper = styled.ul`
  padding: 10px 16px;
  width: 100vw;
  background-color: rgb(249, 219, 97);
  margin: 0 auto;
  display: flex;

  > li {
    flex: 1;
    padding: 3px 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgb(51, 50, 51);
    background-color: rgb(249, 219, 97);
    color: rgb(51, 50, 51);

    &.selected {
      background-color: rgb(51, 50, 51);
      color: rgb(249, 219, 97);
    }
  }

  > li:first-child {
    border-radius: 10px 0 0 10px;
    border-right: none;
  }

  > li:last-child {
    border-left: none;
    border-radius: 0 10px 10px 0;
  }

`
const Duration: React.FC = () => {
    const [selected, setSelected] = useState<'week' | 'month' | 'year'>('week')
    const [toggle] = useState(false)
    const durationMap = {'week': '周', 'month': '月', 'year': '年'}
    type duration = keyof typeof durationMap
    const [durationList] = useState<duration[]>(['week', 'month', 'year'])
    return (
        <Wrapper>
            {durationList.map(item =>
                <li key={item}
                    className={selected === item ? 'selected' : ''}
                    onClick={() => toggle ? '' : setSelected(item)}>
                    {durationMap[item]}
                </li>
            )}
        </Wrapper>
    )
}
export {Duration}

