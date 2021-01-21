import React from "react";


// require('../icons/money.svg')
// require('../icons/tag.svg')
// require('../icons/chart.svg')

// require 最好新建一个文件夹， 重复代码多的时候能方便查找，用的时候直接引用

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


//类型名称开头必须大写
type Props = {
    name?: string
}

const Icon = (props: Props) => {
    return(
        <svg className='icon'>
            { props.name && <use xlinkHref={'#' + props.name} />}
        </svg>
    )
}
export default Icon