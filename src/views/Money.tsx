import Layout from "../component/layout";
import React from "react";
import styled from "styled-components";
import { TagSection } from "./Money/TagSection";
import { NoteSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    // @ts-ignore
    return (
        <MyLayout>
            <TagSection />

            <NoteSection />

            <CategorySection />

            <NumberPadSection />
        </MyLayout>
    )
}
export default Money