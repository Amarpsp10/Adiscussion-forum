import { TextField } from "@material-ui/core";
import GetProfile from './../../config/getProfile'
import { Component } from 'react';

export default class General extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            name : '',
            company: '',
            about : '',
            location: ''
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
            location: response.location
        })
    }

    handleUpdate(){
        console.log(this.state)
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
                location: this.state.location
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
                location: this.state.location
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
                location: this.state.location
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
                location: e.target.value
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