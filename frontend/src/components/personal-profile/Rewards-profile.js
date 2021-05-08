import { TextField } from "@material-ui/core";
import {RiCoinsLine} from 'react-icons/ri'

export default function Rewards(props) {
    return(<div className={'profile-content'}>

        <div className={'reward-content'}>
          
          <div className={'coins-section'}>
                 <text>Your Coins</text>
                 <text className={'coins'}>
                 <RiCoinsLine/>= 20
                 </text>
          </div>

          </div>
          <text className={'coins-button'}>Redeem</text>
        </div>
    );
}