import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React,{Component,useState,useEffect,} from 'react'
import Select from "react-dropdown-select";
import './header.css'
import {FaPlusSquare} from 'react-icons/fa'
export default function Header(props){

    const[category, setCategory] = useState([]);
    const theme = 'dark';
    const options=[
            {id:0,filter:'Question?'},
            {id:1,filter:'Job Notifications'},
            {id:2,filter:'Suggestions'},
            {id:3,filter:'Experience'},
            {id:4,filter:'Issues'},];
            
     return(
         <div className={'header-section'}>
             <div className={'header-menu'}>
             <div style={{width:'200px',marginLeft:'100px'}}>
             <Select className={'select'} color={'black'} searchable={false} separator={true} dropdownHeight={'500px'} searchBy={'filter'} disabledLabel={'disabled'} placeholder={'All Category'} clearable={true} labelField={'filter'} options={options} onChange={(values) => setCategory(values)} />
             </div>
             <div className={'create-button'}>
                 <FaPlusSquare style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                 <h4 className={'create-topic-text'}>Create Topic</h4>
             </div>
             </div>
             <div className={'feed'}></div>
         </div>
     );
}