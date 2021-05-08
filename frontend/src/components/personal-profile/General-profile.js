import { TextField } from "@material-ui/core";


export default function General(props) {
    return(
        <div className={'profile-content'}>
          <div className={'profile-update-input'}>
          <TextField 
          required
          label="Name"
          defaultValue="Amar Preet Singh"
          variant="filled"
          fullWidth
          />
          </div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          
          label="Company"
          defaultValue="University Insititute of engineering and technology, punjab university"
          variant="filled"
          fullWidth
          />
          </div>
          <div className={'profile-update-input'}>
          <TextField 
          required
          label="About"
          defaultValue="Full Stack Developer"
          variant="filled"
          fullWidth
          />
          <div className={'profile-update-input'}>
          <TextField 
          required
          label="Location"
          defaultValue="Jaipur,Rajasthan"
          variant="filled"
          fullWidth
          />
          </div>
          </div>
          <text className={'profile-update-button'}>Update</text>

          </div>
    );
}