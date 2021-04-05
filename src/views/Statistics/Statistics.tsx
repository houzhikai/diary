import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {RecordItem, useRecords} from '../../hooks/useRecords'
import {useTags} from '../../hooks/useTags'
import {day} from '../../component/Day'
import Layout from '../../component/Layout'
import {TypeSection} from '../Money/TypeSction'
import {Echarts} from '../../component/Echarts'
import NoPage from '../Detail/NoPage'
import {IconBox} from '../Detail/IconBox'
import Icon from '../../component/icon'

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
const Duration = styled.ul`
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
const Header = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  overflow-x: scroll;
  white-space: nowrap;
  color: #999;
  border-bottom: 1px solid rgb(227, 227, 227);

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
const List = styled.div`
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none
  }

  .list-title {
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

  .maxHeight {
    height: 100%;
  }
`
const Statistics = () => {
    const stateMap = {'-': '支出', '+': '收入'}
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const {getTag} = useTags()
    const getTagById = (id: number) => getTag(id)
    const hash: { [K: string]: RecordItem[] } = {}
    const selectedRecords = records.filter(r => r.moneyType === category)
    const durationMap = {'week': '周', 'month': '月', 'year': '年'}
    type duration = keyof typeof durationMap
    const [durationList] = useState<duration[]>(['week', 'month', 'year'])
    const [selected, setSelected] = useState<'week' | 'month' | 'year'>('week')
    const timeRule = (createAt: string) => {
        if (selected === 'week') {
            return `${day(createAt).format('YYYY')}-${day(createAt).week()}周`
        } else if (selected === 'month') {
            return day(createAt).format('YYYY-MM月')
        } else if (selected === 'year') {
            return day(createAt).format('YYYY年')
        }
        return ''
    }
    selectedRecords.forEach(r => {
        let key = ''
        key = timeRule(r.createAt)
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0
    })
    const setNewList = (List: RecordItem[]) => {
        const newList: { [K: number]: number } = {}
        List.forEach(r => {
            let key = r.tagId
            if (!(key in newList)) {
                newList[key] = 0
            }
            newList[key] = newList[key] + parseFloat(r.amount)
            newList[key] = parseFloat(newList[key].toFixed(2))
        })
        return Object.entries(newList).sort((a, b) => {
            if (a[1] === b[1]) return 0
            if (a[1] > b[1]) return -1
            if (a[1] < b[1]) return 1
            return 0
        })
    }
    const [dateSelect, _setDateSelect] = useState('')
    const setDateSelect = (dateSelect: string) => {
        _setDateSelect(dateSelect)
    }
    const [toggle, setToggle] = useState(false)
    const onToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    useEffect(() => {
        array.length && setDateSelect(array[array.length - 1][0])
    }, [array.length, selected])
    const dateDecorate = (date: string) => {
        let nowdate = new Date().toISOString()
        if (date === timeRule(nowdate)) {
            return dateDec()
        } else {
            return date
        }
    }
    const dateDec = () => {
        if (selected === 'week') {
            return `本周`
        } else if (selected === 'month') {
            return `本月`
        } else if (selected === 'year') {
            return `今年`
        }
    }
    return (
        <Layout>
            <StaWrapper>
                <TypeWrapper>
                    <div className='title' onClick={onToggle}>{stateMap[category]} ▼</div>
                    {
                        toggle ? <div className='type-control'>
                            <TypeSection value={category}
                                         onChange={value => {
                                             setCategory(value)
                                             setToggle(false)
                                         }}/>
                        </div> : ''
                    }
                </TypeWrapper>
                {/* 周月年 */}
                <Duration>
                    {durationList.map(item =>
                        <li key={item}
                            className={selected === item ? 'selected' : ''}
                            onClick={() => toggle ? '' : setSelected(item)}>
                            {durationMap[item]}
                        </li>
                    )}
                </Duration>


                <List className='date-list'>
                    <Header>
                        {array.length === 0 ? <span className='selected'>
              {dateDec()}
            </span> : array.map(([date]) =>
                                <span key={date}
                                      className={dateSelect === date ? 'selected' : ''}
                                      onClick={() => setDateSelect(date)}>
                {dateDecorate(date)}
              </span>
                        )
                        }
                    </Header>

                    {hash[dateSelect] === undefined ? <section>
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
                                {setNewList(hash[dateSelect]).map(([tagId, records]) =>
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
                </List>
            </StaWrapper>
        </Layout>
    )
}
export {Statistics}