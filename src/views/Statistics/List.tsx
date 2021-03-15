import React, {useEffect, useState} from 'react'
import {RecordItem} from '../../hooks/useRecords'
import {timeRule} from '../../component/Day'
import styled from 'styled-components'
import {Echarts} from './Echarts'
import NoPage from '../Detail/NoPage'
import {IconBox} from '../Detail/IconBox'
import Icon from '../../component/icon'
import {useTags} from '../../hooks/useTags'

const Wrapper = styled.div`
    overflow: auto;
    background-color: #fff;
    &::-webkit-scrollbar {
    display: none
  }
  .list-title{
    padding: 10px 16px;
    font-size: 16px;
    font-weight: bolder;
  }
  li {
    display: flex;
    align-items: center;

    > .iconBox {
      margin: 0 16px;
    }

    > .listItem {
      padding: 16px 10px 16px 0;
      flex: 1;
      display: flex;

      > span:first-child {
        font-size: 14px;
        flex: 1;
      }
    }

    > div:last-child {
      border-bottom: 1px solid #EBEBEB;
    }
  }
  .maxHeight{
    height:100%;
    .list-title {
    margin: 0 auto;
  }
`
const Header = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  overflow-x: scroll;
  white-space: nowrap;
  color: #999;
  border-bottom: 1px solid rgb(227,227,227);
  &::-webkit-scrollbar {
    display: none
  }

  > span {
    margin-right: 7px;
    font-size: 14px;
    padding: 8px 3px;
  }

  > span:last-child {
    margin-right: 0;
  }

  > span.selected {
    color: #000;
    border-bottom: 2px solid #000;
  }
`
const List: React.FC = () => {
    const hash: { [K: string]: RecordItem[] } = {}
    const [selected] = useState<'week' | 'month' | 'year'>('week')
    const {getTag} = useTags()
    const getTagById = (id:number)=>getTag(id)
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0
    })
    const [dateSelect, _setDateSelected] = useState('')
    const setDateSelect = (dateSelect: string) => {
        _setDateSelected(dateSelect)
    }
    useEffect(() => {
        array.length && setDateSelect(array[array.length - 1][0])
    }, [array.length, selected])
    const dateDecorate = (date: string) => {
        let nowDate = new Date().toISOString()
        if (date === timeRule(nowDate)) {
            return dateDoc
        } else {
            return date
        }
    }
    const setNewList = (List: RecordItem[])=> {
        const newList: {[K:number]: number} ={}
        List.forEach(r=> {
            let key = r.tagId
            if(!(key in newList)) {
                newList[key] =0
            }
            newList[key] = newList[key]+parseFloat(r.amount)
            newList[key] = parseFloat(newList[key].toFixed(2))
        })
        return  Object.entries(newList).sort((a, b) => {
            if (a[1] === b[1]) return 0
            if (a[1] > b[1]) return -1
            if (a[1] < b[1]) return 1
            return 0
        })
    }
    const dateDoc = () => {
        if (selected === 'week') {
            return '本周'
        } else if (selected === 'month') {
            return '本月'
        } else if (selected === 'year') {
            return '今年'
        }
    }
    return (
        <Wrapper className='date-list'>
            <Header>
                {array.length === 0 ?
                    <span className='selected'> {dateDoc()} </span> :
                    array.map(([date]) =>
                            <span key={date}
                                  className={dateSelect === date ? 'selected' : ''}
                                  onClick={() => setDateSelect(date)}>
                        {dateDecorate(date)}
                    </span>
                    )}
            </Header>

            {hash[dateSelect] === undefined ?
                <section>
                    <Echarts option={[]} selected={selected}/>
                    <ul className='maxHeight'>
                        <li className='list-title'>支出排行榜</li>
                        <NoPage/>
                    </ul>
                </section> :
                <section>
                    <Echarts option={hash[dateSelect]} selected={selected}/>
                    <ul>
                        <li className='list-title'>支出排行榜</li>
                        {setNewList(hash[dateSelect]).map(([tagId, records])=>
                        <li key={tagId}>
                            <IconBox className='iconBox'>
                                <Icon name={getTagById(parseInt(tagId)).icon}/>
                            </IconBox>
                            <div className='listItem'>
                                <span>{getTagById(parseInt(tagId)).name}</span>
                                <span>￥{records}</span>
                            </div>
                        </li>
                        )}
                    </ul>
                </section>
            }
        </Wrapper>
    )
}
export {List}

