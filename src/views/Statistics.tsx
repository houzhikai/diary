import Layout from '../component/Layout'
import {useState} from 'react'
import {RecordItem, useRecords} from '../hooks/useRecords'
import styled from 'styled-components'
import {TypeSection} from './Money/TypeSction'
import {Duration} from './Statistics/Divuration'
import {List} from './Statistics/List'
import {timeRule} from '../component/Day'

const StaWrapper = styled.div`
  display: flex;
  height: calc(100vh - 54px);
  flex-direction: column;

  .date-list {
    overflow: auto;
  }
`
const TypeWrapper = styled.div`
  background-color: rgb(249, 219, 97);
  position: relative;

  > .title {
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    padding: 14px 16px 4px 16px;
  }

  > .type-control {
    position: fixed;
    top: 86px;
    left: 0;
    background-color: #fff;
    z-index: 2;

    > ul li {
      display: block;
      width: 100vw;
      padding: 10px 16px;

      &:first-child {
        border-bottom: 1px solid rgb(227, 227, 227);
      }
    }

    &::after {
      content: '';
      position: fixed;
      top: 166.4px;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
  }
`
const Statistics = () => {
    const stateMap = {'-': '支出', '+': '收入'}
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const [toggle, setToggle] = useState(false)
    const hash: { [K: string]: RecordItem[] } = {}
    const selectedRecords = records.filter(r => r.moneyType === category)
    selectedRecords.forEach(r=> {
        let key =''
        key = timeRule(r.createAt)
        if(!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    const onToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    return (
        <Layout>
            <StaWrapper>
                {/*支出和收入切换*/}
                <TypeWrapper>
                    <div className='title' onClick={onToggle}>{stateMap[category]} ▼</div>
                    {toggle ? <div className='type-control'>
                        <TypeSection value={category}
                                     onChange={value => {
                                         setCategory(value)
                                         setToggle(false)
                                     }}/>
                    </div> : ''}
                </TypeWrapper>
                {/*周月年*/}
                <Duration/>

                <List/>
            </StaWrapper>
        </Layout>
    )
}
export {Statistics}