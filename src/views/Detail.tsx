import React, {useState} from 'react'
import Layout from '../component/Layout'
import {Topbar} from './Money/CSS/Topbar'
import Icon from '../component/icon'
import {Aside} from './Detail/Aside'
import {day} from '../component/Day'
import {Main} from './Detail/Main'
import DatePickerBox from './Detail/DatePickerBox'


const Detail = () => {
    const [toggleDate, setToggleDate] = useState(true)
    const [month, setMonth] = useState(day(new Date()).format('YYYY-MM'))
    const datePickerToggle = () => {
        toggleDate ? setToggleDate(false) : setToggleDate(true)
    }

    return (
        <Layout>
            <Topbar><Icon/><span >随身记</span><Icon/></Topbar>
            <Aside value={month} onchange={datePickerToggle}/>

            {
                toggleDate ? '' :
                    <DatePickerBox month={month} onchange={(month) => setMonth(month)}
                                   datePickerToggle={datePickerToggle}> </DatePickerBox>
            }

            <Main value={month}/>
        </Layout>
    )
}
export {Detail}