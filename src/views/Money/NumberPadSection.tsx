import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {generateOutput} from "./NumberPadSection/generateOutput";  //如果有多个 Wrapper ，路径需要自己寻找


const NumberPadSection: React.FC = () => {
    const [output, _setOutput] = useState('0') //小数不是 number 类型，要写成字符串类型
    const setOutput = (output: string) => {
       if(output.length > 16) {
           output = output.slice(0, 16)
       }
       else if(output.length === 0 ) {
        output = '0'
       }
        _setOutput(output)
    }
    const onclickButtonWrapper = (e: React.MouseEvent) => {   //传出去的是button的值，而不是（<button>值<button>）
        const text = (e.target as HTMLButtonElement).textContent   //强制让浏览器认识button
        if (text === null) { return }
        if( text === 'OK' ) {
           // TODO
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