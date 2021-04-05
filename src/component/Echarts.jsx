import {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {day} from "./Day";

function Echarts(props){
    const {option, selected} = props
    const container = useRef(null);
    const chart = useRef(null);

    const hash = {}
    if(selected==='week'){
        let date = new Date()
        if(option[0]){
            date=option[0].createAt
        }
        let sunday= new Date(new Date(date).getTime() - day(date).day()*24*60*60*1000)

        for(let i=0; i<7; i++){
            let nowday= new Date(sunday.getTime()+i*24*60*60*1000)
            hash[day(nowday).format('MM-DD')] = []
        }
    }else if(selected==='month'){
        let date = new Date()
        if(option[0]){
            date=option[0].createAt
        }
        let monthLastDay = new Date(day(date).year(),day(date).month()+1,0)

        for(let i=0; i<monthLastDay.getDate(); i++){
            let nowday= new Date(monthLastDay.getTime()-i*24*60*60*1000)
            hash[day(nowday).format('MM-DD')] = []
        }
    }else if(selected==='year'){

        for(let i=1; i<=12; i++){
            let nowMonth = i;
            if(i<10){
                nowMonth='0'+ i;
            }
            hash[nowMonth.toString()] = []
        }
    }
    option.forEach(r => {
        let key = ''
        if(selected==='year'){
            key=day(r.createAt).format('MM')
        }else{
            key=day(r.createAt).format('MM-DD')
        }

        hash[key].push(r)
    });


    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0
    })

    const sumAmount = (arr) => {
        let sum = 0
        if(arr){
            arr.forEach(item => {
                sum += parseFloat(item.amount)
            })
            return parseFloat(sum.toFixed(2))
        }
        return 0
    }

    let hashKey = []
    let hashAmount = []
    array.forEach((value)=>{
        hashKey.push(value[0]);
        hashAmount.push(sumAmount(value[1]))
    })

    let dataList = {
        tooltip: {},
        xAxis: {
            data:  hashKey,
            boundaryGap: false
        },
        yAxis: {},
        series: [{
            name: '金额',
            type: 'line',
            data: hashAmount
        }]
    }


    useEffect(()=>{
        const width = document.documentElement.clientWidth
        container.current.style.width = `${width}px`
        container.current.style.height = `${width / 1.3}px`
        chart.current = echarts.init(container.current)
    }, [])

    useEffect(()=>{
        Object.assign(dataList.xAxis.data, hashKey)
        Object.assign(dataList.series[0].data, hashAmount)
        chart.current.setOption(dataList)
    },[option])

    return (
        <div ref={container}/>
    )
}
export {Echarts}
