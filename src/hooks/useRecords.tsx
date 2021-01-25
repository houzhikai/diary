import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";


 type newRecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
}
 export type RecordItem = newRecordItem & {
    createAt: string    //格式  ISO 8601
}
export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    },[])
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    },records)
    const addRecord = (newRecord: newRecordItem) =>{
        if(newRecord.amount <= 0) {
            alert('请输入金额')
            return false
        }
        if(newRecord.tagIds.length === 0) {
           alert('请选择标签')
            return false
        }
        const record = {...newRecord,createAt:(new Date()).toString()}
        setRecords([...records, record])
        return true
    }
    return {records, addRecord}
 }
