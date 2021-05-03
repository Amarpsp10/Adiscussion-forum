import { duration, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React,{Component,useState,useEffect,} from 'react'
import Modal from 'react-modal'
// import Select from "react-dropdown-select";
import Select from 'react-select'
import './header.css'
import {FaPlusSquare} from 'react-icons/fa'

 
export default function Header(props){
    const[createTopicPop, setCreateTopicPop] =useState(false);
    const[category, setCategory] = useState([]);
    const theme = 'dark';
    const options=[
            {id:0,filter:'Question?'},
            {id:1,filter:'Job Notifications'},
            {id:2,filter:'Suggestions'},
            {id:3,filter:'Experience'},
            {id:4,filter:'Issues'},];
    const option = [
                { value: 'chocolat', label: 'Questions' },
                { value: 'strawberry', label: 'Job Notification' },
                { value: 'vanilla', label: 'Suggestions' },
                { value: 'choc', label: 'Experience' },
                { value: 'chocol', label: 'Issues' },
                { value: 'chocola', label: 'features' },
              ];

              const customStyles = {
                menu: (provided, state) => ({
                  ...provided,
                  width: state.selectProps.width,
                  borderBottom: '1px dotted pink',
                  color: state.selectProps.menuColor,
                  padding: 20,
                }),
              
                control: (_, { selectProps: { width }}) => ({
                  width: width
                }),
              
                singleValue: (provided, state) => {
                  const opacity = state.isDisabled ? 0.5 : 1;
                  const transition = 'opacity 300ms';
              
                  return { ...provided, opacity, transition };
                }
              }

    
     return(
         <div className={'header-section'}>
             <div className={'header-menu'}>
             <div style={{width:'200px',marginLeft:'100px',borderWidth:'3px',border:'solid',borderColor:'#7C7C7C',borderRadius:'8px'}}>
             {/* <Select className={'select'} color={'black'} searchable={false} separator={true} dropdownHeight={'500px'} searchBy={'filter'} disabledLabel={'disabled'} placeholder={'All Category'} clearable={true} labelField={'filter'} options={options} onChange={(values) => setCategory(values)} /> */}
             <Select options={option}/>
             </div>
             <div onClick={()=>setCreateTopicPop(true)} className={'create-button'}>
                 <FaPlusSquare style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                 <h4 className={'create-topic-text'}>Create Topic</h4>
             </div>
             </div>
             
             <Modal  isOpen={createTopicPop}  
                          style={{
                            content : {
                                borderRadius: '20px',
                                top                   : '60%',
                                left                  : '50%',
                                right                 : 'auto',
                                bottom                : 'auto',
                                marginRight           : '-50%',
                                transform             : 'translate(-50%, -50%)',
                                // backgroundColor: lightTheme? 'white': '#3a3838',
                                width:    '70%',
                                height: '80%',
                                backgroundColor:'white',
                                borderTopWidth:'3px',
                                
                              },
                          }}>
                    <div>
                        <h1 style={{textAlign:'center'}}>Create Topic</h1>
                        <hr></hr>
                        <div style={{display:'flex', flexDirection:'row'}}>
                        <input className={'input-title'} maxLength={50}/>
                        <div style={{width:'250px'}}>
                        <Select options={option}/>
                        </div>
                        </div>
                        <input className={'input-title'} maxLength={50}/>
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <h3 className={'button-primary'} onClick={()=> setCreateTopicPop(false)}>Cancel</h3>
                        <h3 className={'button-secondary'} onClick={()=> setCreateTopicPop(false)}>Create Topic</h3>
                        </div>
                    </div>
                    </Modal>
                    <div className={'feed'}></div>
         </div>
     );
}