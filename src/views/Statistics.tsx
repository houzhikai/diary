import Layout from "../component/layout";
import React, {ReactNode, useState} from "react";
import {CategorySection} from "./Money/CategorySection";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";

const  CategoryWrapper = styled.div`
  background: #fed030;
  margin-bottom: 12px;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  line-height: 20px;
  background: #fff;
  border-top: 1px solid #eeece7;
  > .note {
    margin-right: auto;
    color: #999;
    margin-left: 16px;
    font-size: 14px;
  }
`
const H3 = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 4px 16px;
  
`
function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const {getName} = useTags()
    const hash: {[key: string]: RecordItem[]} = {}             // {'2021-1-20': [item, item] , '2021-1-19': [item, item] ,, '2021-1-26': [item, item, item, item]}
    const selectedRecords = records.filter(r => r.category === category)

    selectedRecords.map(r => {
       const key = day(r.createAt).format('YYYY-MM-DD')
        if(!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    //                                 .sort 排序
    const array = Object.entries(hash).sort((a,b) => {
        if(a[0] === b[0] ) return 0
        if(a[0] > b[0])  return -1
        if(a[0] < b[0])  return 1
        return 0               // 也许没有 a[0]的值
    })
    console.log(array)
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {/*     很好的一个取名例子           */}
            {array.map(([date, records]) => <div>
                <H3>{date}</H3>
                <div>
                    {/*{JSON.stringify(records)}*/}
                    {records.map(r => {
                        return <Item key={r.createAt}>
                            <div className='tags'>
                                {r.tagIds
                                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                    .reduce((result, span, index, array) =>
                                        result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                                }
                            </div>
                            {r.note && <div className='note'>
                                {r.note}
                            </div>}
                            <div className='amount'>
                                ￥{r.amount}
                            </div>
                        </Item>
                    })}
                </div>
            </div>)}

        </Layout>
    )
}
export default  Statistics