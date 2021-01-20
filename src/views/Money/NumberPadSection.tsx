import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column; //上下布局
  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    //                往上提5px  往后缩5px
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.3), //内阴影  只有下面有阴影
                inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad { //面板

    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px; //高度固定
      border: none;

      &.OK {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #dfdfdf;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }

      &:nth-child(12) {
        background: #8b8b8b;
      }

      &:nth-child(14) {
        background: #9a9a9a;
      }
    }
  }
`

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
        if (text === null) {
            return
        }
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(output === '0') {
                    setOutput(text)
                }
                else {
                    setOutput(output + text)
                }
                break;
            case '删除':
                if(output.length === 1) {
                    setOutput('')
                }
                else {
                    setOutput(output.slice(0, -1))
                }
                break;
            case '清空':
                setOutput('0')
                break;
            case 'OK':
                console.log('OK')
                break;
            case '.':
                if(output.indexOf('.') >= 0) {
                    return;
                }
                setOutput(output + '.')
                break;
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