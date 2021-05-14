import {Component} from 'react'
import { TextField } from "@material-ui/core";
import {RiCoinsLine} from 'react-icons/ri'
import GetCoins from './../../config/getCoins'
export default class Rewards extends Component {
    constructor(props){
      super(props)
      this.state={
        isLoading:true,
        coins:0
      }
    }
    componentDidMount(){
      this.setValue();
    }
    async setValue() {
      let response = await GetCoins(localStorage.getItem('username'))
      response = response.pop()
      this.setState({
          isLoading: false,
          coins:response.coins
      })
  }

    render(){
      return(<div className={'profile-content'}>
      {this.state.isLoading?
         <div className={'loading-box'}>
             <div className={'loader'}></div>    
         </div>
                   :
        <div className={'reward-content'}>
          
          <div className={'coins-section'}>
                 <text>Your Coins</text>
                 <text className={'coins'}>
                 <RiCoinsLine/>= {this.state.coins}
                 </text>
          </div>
          </div>
        }
          <text className={'coins-button'}>Redeem</text>

          <ul className={'rewards-list'}>
            <li>Create topic and get 20<RiCoinsLine/> Coins.</li>
            <li>Comment on topic and get 5<RiCoinsLine/> Coins.</li>
            <li>Save topic and get 2<RiCoinsLine/> Coins.(unsaving topic deducte 2 coins)</li>
            <li>Start Chat with new person and get 10<RiCoinsLine/> Coins.</li>
          </ul>
        </div>
    );
  }
}