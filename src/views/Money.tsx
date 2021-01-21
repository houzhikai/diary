import Layout from "../component/layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagSection} from "./Money/TagSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({    //定一个初始值
        tagIds: [] as number[],  //初始值的tags是空的
        note: '',
        category: '-' as Category,
        amount: 0
    })

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    return (
        <MyLayout>
            {selected.tagIds.join(',')}<hr/>
            {selected.note}<hr/>
            {selected.category}<hr/>
            {selected.amount}
            <TagSection value={selected.tagIds}
                        onChange={tagIds => onChange({tagIds}) }/>
            <NoteSection value={selected.note}
                         onChange={note => onChange({note}) }/>
            <CategorySection value={selected.category}
                             onChange={category => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={amount => onChange({amount})}
                              onOk={()=> {}}
            />
        </MyLayout>
    )
}

export default Money