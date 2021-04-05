import React, {useState} from 'react'
import {DatePickerView} from 'antd-mobile'


type Props = {
    value?: Date,
    className?: string,
    onValueChange: (...args: any) => void
}
const DatePicker: React.FC<Props> = (props) => {
    const [value, setValue] = useState()
    const onChange = (value: any) => {
        setValue(value)
    }
    // const onValueChange = (...args:any) => {
    //     console.log(args);
    // };
    return (
        <div>
            <DatePickerView
                className={props.className}
                mode={'month'}
                value={props.value ? props.value : value}
                onChange={onChange}
                onValueChange={props.onValueChange}
                minDate={new Date(2010, 0, 1, 0, 0, 0)}
                maxDate={new Date(2025, 11, 1, 0, 0, 0)}
            />
        </div>
    )
}
export default DatePicker

