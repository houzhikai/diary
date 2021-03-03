import React, {useState} from "react";

type Props = {
    value: '-' | '+';
    onChange: (value: '-' | '+')=>void;
    className?: string
}

const TypeSection: React.FC<Props> = (props) => {
    const stateMap = {'-':'支出', '+':'收入'}
    type states = keyof typeof stateMap
    const [stateList] = useState<states[]>(['-','+'])

    return (
        <>
            <ul className={props.className? props.className:""}>
                {stateList.map(item =>
                    <li key={item}
                        className={props.value===item ? "selected":""}
                        onClick={()=> props.onChange(item)}>
                        {stateMap[item]}
                    </li>
                )}
            </ul>
        </>
    )
}

export {TypeSection}