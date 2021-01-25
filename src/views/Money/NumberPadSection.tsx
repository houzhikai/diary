import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {generateOutput} from "./NumberPadSection/generateOutput";  //如果有多个 Wrapper ，路径需要自己寻找

type Props = {
    value: number,
    onChange: (value: number) => void,
    onOk?: () => void   //onOk 可传可不传
}

const NumberPadSection: React.FC<Props> = (props) => {
    // const output = props.value.toString()
    const [output, _setOutput] = useState(props.value.toString())
    const setOutput = (output: string) => {
        let newOutput:string
       if(output.length > 16) {
           newOutput = output.slice(0, 16)
       }
       else if(output.length === 0 ) {
        newOutput = '0'
       }
       else {
           newOutput = output
       }
       _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))
    }
    const onclickButtonWrapper = (e: React.MouseEvent) => {   //传出去的是button的值，而不是（<button>值<button>）
        const text = (e.target as HTMLButtonElement).textContent   //强制让浏览器认识button
        if (text === null) { return }
        if( text === 'OK' ) {
            if(props.onOk) {props.onOk()}
            return
        }
        if('0123456789.'.split('').concat(['删除','清空']).indexOf(text)>=0) {
            setOutput(generateOutput(text, output))
        }
    }

    return (
        <Wrapper>
            <div className='output'>
                {output}
            </div>
            <div className='pad clearfix' onClick={onclickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='OK'>OK</button>
                <button className='zero'>0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}

export {NumberPadSection}