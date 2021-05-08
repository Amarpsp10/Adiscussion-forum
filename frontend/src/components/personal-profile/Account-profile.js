import { TextField } from "@material-ui/core";


export default function (props) {
    return(
        <div className={'profile-content'}>
          <div className={'profile-update-input'}>
          <h3>Change Password</h3>
          <TextField 
          required
          id="filled-required"
          label="Current Password"
          variant="filled"
          type='password'
         fullWidth
          />
          </div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          id="filled-required"
          label="New Password"
          variant="filled"
          type='password'
          fullWidth
          />
          </div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          id="filled-required"
          label="Confirm New Password"
          variant="filled"
          type={'password'}
          fullWidth
          />
          </div>
          <text className={'profile-update-button'}>Update</text>
          </div>
    );
}