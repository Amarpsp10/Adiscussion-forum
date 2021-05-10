import React,{useState,useEffect} from 'react'
import './welcome.css'
import Connect from './../../assets/connecting.svg'
export default function Welcome(params) {

    return(
        <div className={'welcome-page'}>
            <div className={'welcome-content'}>
                <text className={'welcome-heading'}>Welcome to MissionEd<span>-forum</span></text>
                <text className={'welcome-taglines'}>
                    <ul>
                        <li>Ask, Discuss and Find Solution</li>
                        <li>Learn and Share your Experience and Problems</li>
                        <li>Get Rewards on every Activity</li>
                    </ul>
                </text>
                    <text className={'welcome-taglines'}>Get Started with Register yourself!</text>
            </div>
        </div>
    );
}