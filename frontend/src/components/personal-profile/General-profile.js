import { TextField } from "@material-ui/core";
import GetProfile from './../../config/getProfile'
import { Component } from 'react';
import {baseurl, updateProfile} from './../../config/Apis'
import axios from 'axios'
export default class General extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            name : '',
            company: '',
            about : '',
            location: '',
            id:''
        }
    }

    componentDidMount(){
        this.setValue();
    }

    async setValue() {
        let response = await GetProfile(localStorage.getItem('username'))
        response = response.pop()
        this.setState({
            isLoading: false,
            name : response.name,
            company: response.company,
            about : response.about,
            location: response.location,
            id: response.id
        })
    }

    async handleUpdate(){
        let form_data = new FormData();
        form_data.append('username',localStorage.getItem('username'));
        form_data.append('name',this.state.name);
        form_data.append('company',this.state.company);
        form_data.append('about',this.state.about);
        form_data.append('location',this.state.location);

        await  axios.put(`${baseurl}${updateProfile}${this.state.id}/`, form_data,  {
        headers: {
          'content-type': 'multipart/form-data',
          "Accept": "application/json",
         "X-CSRFToken": "$crf_token"
        }
      }).then(res=>{if(res.state===200) window.location.reload(false)})
      alert('Profile updated succesfully')
    }
    
    render(){
        return(
            <div className={'profile-content'}>
          
          {this.state.isLoading? 
                    <div className={'loading-box'}>
                       <div className={'loader'}></div>    
                    </div> 
          :
          <div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          label="Name"
          defaultValue={this.state.name}
          variant="filled"
          fullWidth
          onChange={(e)=>{
            this.setState({
                isLoading: false,
                name : e.target.value,
                company: this.state.company,
                about : this.state.about,
                location: this.state.location,
                id : this.state.id
            })
          }}
          />
          </div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          
          label="Company"
          defaultValue={this.state.company}
          variant="filled"
          fullWidth
          onChange={(e)=>{
            this.setState({
                isLoading: false,
                name : this.state.name,
                company: e.target.value,
                about : this.state.about,
                location: this.state.location,
                id : this.state.id
            })
          }}
          />
          </div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          label="About"
          defaultValue={this.state.about}
          variant="filled"
          fullWidth
          onChange={(e)=>{
            this.setState({
                isLoading: false,
                name : this.state.name,
                company: this.state.company,
                about : e.target.value,
                location: this.state.location,
                id : this.state.id
            })
          }}
          />
          <div className={'profile-update-input'}>
          <TextField 
          required
          label="Location"
          defaultValue={this.state.location}
          variant="filled"
          fullWidth
          onChange={(e)=>{
            this.setState({
                isLoading: false,
                name : this.state.name,
                company: this.state.company,
                about : this.state.about,
                location: e.target.value,
                id : this.state.id
            })
          }}
          />
          </div>
          </div>
          </div>
        }
          <text onClick={()=>this.handleUpdate()} className={'profile-update-button'}>Update</text>

          </div>
    );
}    
}