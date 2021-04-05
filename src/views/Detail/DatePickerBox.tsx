import React from "react";
import styled from "styled-components";
import DatePicker from './DatePicker'

const DatePickerBox = styled.aside`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  > .date-header {
    background-color: #F9DB61;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 30px;

    > .date-title {
      font-size: 16px;
    }
  }

  .date-picker {
    background-color: #fff;
  }
`
type Props = {
    month:string,
    onchange: (month:string)=>void,
    datePickerToggle: ()=>void,
}
const Component:React.FC<Props> = (props) => {
    const getDate = (...args: any) => {
        args[0].forEach((value: string, index: number) => {
            if (parseInt(value) + 1 < 10) {
                args[0][index] = '0' + (parseInt(value) + 1)
            }
        })
        props.onchange(args[0].join('-'))
    }

    return (

        <DatePickerBox>
            <div className='date-header'>
                <div>年份选择</div>
                <div className='date-title'>月份选择</div>
                <div onClick={props.datePickerToggle}>确定</div>
            </div>
            <DatePicker onValueChange={getDate} className='date-picker' value={new Date(props.month)}/>
        </DatePickerBox>

    )

}

export default Component