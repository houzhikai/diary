import React, {useState} from 'react'
import Layout from '../component/Layout'
import {Topbar} from './Money/CSS/Topbar'
import Icon from '../component/icon'
import {Aside} from './Detail/Aside'
import {day} from '../component/Day'
import {DatePickerBox} from './Detail/DatePickerBox'
import Main from './Detail/Main'


const Detail = () => {
    const [toggleDate, setToggleDate] = useState(true)
    const [month, setMonth] = useState(day(new Date()).format('YYYY-MM'))
    const datePickerToggle = () => {
        toggleDate ? setToggleDate(false) : setToggleDate(true)
    }
    return (
        <Layout>
            <Topbar>
                <Icon/>
                <span>随身记</span>
                <Icon/>
            </Topbar>
            <Aside value={month} onchange={datePickerToggle}>月份</Aside>
            {
                toggleDate ? '' :
                    <DatePickerBox month={month}
                                   onchange={month => setMonth(month)}
                                   datePickerToggle={datePickerToggle}/>
            }
            <Main value={month}/>
        </Layout>
    )
}
export {Detail}