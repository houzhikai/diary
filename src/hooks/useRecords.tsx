import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {day} from "../component/Day";

export type RecordItem = {
    tagId: number
    note: string
    moneyType: '-' | '+'
    amount: string
    createAt: string        //ISO 8601 格式
}
type newRecordItem = Omit<RecordItem, 'createAt'>      //忽略 RecordItem 的 createAt的值，其他都要

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, records)

    const addRecord = (newRecord: newRecordItem) => {
        if(newRecord.tagId === null || newRecord.tagId === 0){
            alert('请添加标签!!！')
            return false
        }
        if(parseFloat(newRecord.amount) <= 0){
            alert('请输入金额！')
            return false
        }
        const record = {...newRecord, createAt: (new Date().toISOString())}
        setRecords([...records, record]);
        return true
    }

    const getAmountByType = (moneyType: '-' | '+', isRecords?:RecordItem[]) => {
        let newRecords:RecordItem[] = records
        if (isRecords) {
            newRecords = isRecords
        }
        return newRecords.filter(record => record.moneyType === moneyType)
    }

    const getAmountByDate = (date: string, isRecords?:RecordItem[]) => {
        const length = date.split('-').length
        let timeType:string = 'YYYY-MM'
        if(length===1){
            timeType = 'YYYY'
        }else if(length===2){
            timeType = 'YYYY-MM'
        }else if(length===3){
            timeType = 'YYYY-MM-DD'
        }
        const TimeShift = (createAt: string) => day(createAt).format(timeType);
        let newRecords:RecordItem[] = records
        if (isRecords) {
            newRecords = isRecords
        }
        return newRecords.filter(record => TimeShift(record.createAt) === date)
    }

    const sumAmountByType = (moneyType: '-' | '+', isRecords?:RecordItem[]) => {
        const record = getAmountByType(moneyType, isRecords?isRecords:undefined);
        let amount = 0
        record.forEach(value => {
            amount += parseFloat(value.amount)
        })
        amount = parseFloat(amount.toFixed(2))
        return amount
    }
    const getRecordById = (id:number)=>{
        return records.filter(record=>record.tagId === id)
    }
    return {records, addRecord, getAmountByType, sumAmountByType, getAmountByDate, getRecordById}
}