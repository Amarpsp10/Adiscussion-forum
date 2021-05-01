import React, { Component } from 'react'
import './Nav.css'
import MissionEd_logo from './../../assets/MissionEd_logo.svg'
export default class Nav extends Component{
    render(){
        return(
            <div className={'nav-section'}>
                <div>
                    <div className={'mission-ed-logo'}>
                        <img className={'logo-image'} src={MissionEd_logo} width={'50px'}/>
                        <h1 className={'logo-text'}>Mission<span>Ed</span></h1>
                    </div>
                    <div></div>                  
                </div>
            </div>
        );
    }
}