import React from "react";
import { useParams } from "react-router-dom";
import {useTags} from "../useTags";

type Params = {
    id: string
}
const TagEdit:React.FC =() => {
    // const {tags} = useTags()
    const {findTag} = useTags()
    let {id} = useParams<Params>()

    // const tag = tags.filter(tag => tag.id === parseInt(id))[0]  //找ID的过程
    const tag = findTag(parseInt(id))
    return(
        <div>{tag.name}</div>
    )
}
export {TagEdit}