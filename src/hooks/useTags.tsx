import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {CreateId} from "../lib/createId";
import {useRecords} from "./useRecords";

type  MoneyType = '-' | '+'
const initTags = [
    {id: CreateId(), name: '餐饮', type: '-', icon:'food'},
    {id: CreateId(), name: '购物', type: '-', icon:'shop'},
    {id: CreateId(), name: '交通', type: '-', icon:'traffic'},
    {id: CreateId(), name: '日用', type: '-', icon:'daily'},
    {id: CreateId(), name: '水果', type: '-', icon:'fruit'},
    {id: CreateId(), name: '娱乐', type: '-', icon:'KTV'},
    {id: CreateId(), name: '通讯', type: '-', icon:'communication'},
    {id: CreateId(), name: '旅行', type: '-', icon:'travel'},
    {id: CreateId(), name: '居家', type: '-', icon:'sofa'},
    {id: CreateId(), name: '工资', type: '+', icon:'wage'},
    {id: CreateId(), name: '兼职', type: '+', icon:'partTime'},
    {id: CreateId(), name: '理财', type: '+', icon:'financial'},
    {id: CreateId(), name: '其他', type: '+', icon:'other'}
]
// 自定义hook
function useTags() {
    const [tags, setTags] = useState<{ id: number; name: string; type: MoneyType; icon: string}[]>([])
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = initTags
        }
        setTags(localTags)
    }, []);

    useUpdate(()=>{
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])


    const findTag = (id: string) => tags.filter(item => item.id === parseInt(id))[0]
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result
    }
    const updateTag = (id: number, type: MoneyType, icon: string, obj: { name: string }) => {
        // const index = findTagIndex(id);
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // tagsClone.splice(index, 1, {id: id, name: obj.name});
        // setTags(tagsClone);
        setTags(tags.map(tag => id === tag.id ? {id, icon, type, name: obj.name} : tag));
    }

    const {getRecordById} = useRecords()

    const deleteTag = (id: number) => {
        // const index = findTagIndex(id);
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // tagsClone.splice(index, 1);
        // setTags(tagsClone);
        if(getRecordById(id).length===0){
            setTags(tags.filter((tag) => tag.id !== id))
        }else{
            alert('该标签在使用中，无法删除！')
        }

    }
    const addTag = (type: MoneyType) => {
        const tagName = window.prompt('新标签名称为:')
        if (tagName !== null && tagName !== '') {
            setTags([...tags, {id: CreateId(), type: type, name: tagName, icon: 'star'}])
        }
    }

    const getTag = (id:number) => {
        return tags.filter(tag => tag.id === id)[0]
    }
    const getTypeTag = (type: MoneyType) => {
        return tags.filter(tag => tag.type === type)
    }
    return {tags, getTag, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag, getTypeTag}
}

export {useTags}