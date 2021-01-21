import {useState} from "react";
import {createId} from "./lib/createId";


const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]
const useTags = () => {             //自定义一个hook（在自定义函数中使用 useState，然后返回一个读写接口到外面去）
    const [tags, setTags] = useState<{id:number, name:string}[]>(defaultTags)
    const findTag = (id:number) => tags.filter(tag=>tag.id === id)[0]
    const findTagIndex = (id:number) => {
        let result = -1
        for(let i =0 ; i<tags.length; i++) {
            if(tags[i].id === id) {
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id:number, obj: {name:string}) =>{
       const index = findTagIndex(id)
        //深拷贝 tags 得到 tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把 tagsClone 的第 index 删掉，换成 {id： id， name： obj.name}
        const newTas = tagsClone.splice(index, 1, {id:id, name: obj.name})
        setTags(tagsClone)
    }
    return { tags, setTags, findTag, updateTag, findTagIndex }     //通过对象的形式 return 出去
}
export {useTags}