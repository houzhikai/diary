import React, {useState} from 'react'
import styled from 'styled-components'
import {useRecords} from '../hooks/useRecords'
import Layout from '../component/Layout'
import CategorySection from './Money/CategorySection'
import {TagsSection} from './Money/TagsSection'
import NoteSection from './Money/NoteSection'
import NumberSection from './Money/NumberSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type  MoneyType = '-' | '+'
const defaultMoney = {
    tagId: 0,
    note: '',
    moneyType: '-' as MoneyType,
    amount: '0'
}
const Money = () => {
    const [selected, setSelected] = useState(defaultMoney)
    const {addRecord} = useRecords()
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const onSubmit = () => {
        if (addRecord(selected)) {
            addRecord(selected)
            alert('保存成功')
            setSelected(defaultMoney)
        }
    }

    return (
        <MyLayout>
            <CategorySection value={selected.moneyType} onChange={(moneyType: MoneyType) => onChange({moneyType})}/>
            <TagsSection tagType={selected.moneyType} tagId={selected.tagId} onChange={tagId => onChange({tagId})}/>
            <NoteSection value={selected.note} onChange={note => onChange({note})}/>
            <NumberSection value={selected.amount} onChange={amount => onChange({amount})} onOk={onSubmit}/>
        </MyLayout>
    )
}
export default Money