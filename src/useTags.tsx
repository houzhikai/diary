import {useState} from "react";

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    return { tags, setTags }     //通过对象的形式 return 出去

}

export {useTags}