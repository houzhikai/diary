import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";


const useTags = () => {             //自定义一个hook（在自定义函数中使用 useState，然后返回一个读写接口到外面去）
    const [tags, setTags] = useState<{id:number, name:string}[]>([])
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if(localTags.length === 0) {
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'}
            ]
        }
        setTags(localTags)
    },[])//空数组表示 第一次渲染，也只能渲染一次   组件挂载时执行
    useUpdate(()=>{
        window.localStorage.setItem('tags', JSON.stringify(tags))  //只要tags 变化了，就将数据存放在 localStorage 中
    },tags)
    const findTag = (id:number) => tags.filter(tag=>tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id:number, {name}:{name: string}) =>{
       setTags(tags.map(tag =>  tag.id === id ? {id, name} : tag ))
       //  // 获取你要改的 tag 的下标
       // const index = findTagIndex(id)
       //  //深拷贝 tags 得到 tagsClone
       //  const tagsClone = JSON.parse(JSON.stringify(tags))
       //  //把 tagsClone 的第 index 删掉，换成 {id： id， name： obj.name}
       //  const newTas = tagsClone.splice(index, 1, {id:id, name: obj.name})
       //  setTags(tagsClone)
    }
    const deleteTag = (id:number) => {
        setTags(tags.filter(tag => tag.id !== id))  //filter 会生成一个新的数组
        // // 获取你要改的 tag 的下标
        // const index = findTagIndex(id)
        // //深拷贝 tags 得到 tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // //把 tagsClone 的第 index 删掉
        // const newTas = tagsClone.splice(index, 1)
        // setTags(tagsClone)
    }
    const addTag = () => {
        const tagName = window.prompt('新标签的名字是')
        if(tagName !== null && tagName !== '') {
            setTags([...tags, {id:createId(), name: tagName}]) // 将原来的tags 拷贝过来，将新的 tagName 放到后面
        }
    }
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    }
    return { tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag }     //通过对象的形式 return 出去
}
export {useTags}