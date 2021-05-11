import React,{useState} from 'react'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
export default function CategoryFilter(props) {
    const[isOpen,setOpen] = useState(false)
    const[category,setCategory] = useState('All Category')
    const clickCategory = ()=>{
        setOpen(!isOpen);
    }
    const categoryHandle=(props)=>{
        setCategory(props)
        setOpen(false)
    }
    const tags = [
        {tag:'All Category'},
        {tag:'General'},
        {tag:'Question'},
        {tag:'Experience'},
        {tag:'Job Notification'},
        {tag:'Internship'},
        {tag:'Suggestions'},
    ];

    const CategoryItem = (props)=>{
        return(
            <div onClick={()=>categoryHandle(props.tag)} className={'category-filter-item'}>
               <text >{props.tag}</text>
            </div>
        );
    }
   
    return(
        <div style={{display:'flex',flexDirection:'column'}}>

    <div onClick={()=>clickCategory()} className={'category-filter-box'}>
        <input value={category} className={'category-filter-input'}/>
        <div className={'category-filter-icon'}>
        {isOpen? <IoIosArrowUp/> : <IoIosArrowDown/>}

        </div>
        <div style={{display:isOpen?true:'none'}} className={'categories-filter'}>
            {tags.map((data)=>{
                return <CategoryItem tag={data.tag}/>
            })}
        </div>
        </div>
    </div>
    );
}