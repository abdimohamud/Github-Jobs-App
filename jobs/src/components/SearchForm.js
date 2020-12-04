import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [description, setDescription] = React.useState('Cat in the Hat');
  const [location, setLocation] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
      if(event.target.label === "Description"){
         setDescription(event.target.value); 
         console.log(description)
      } else {
        setLocation(event.target.value)
        console.log(location)
      }
    
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="outlined-name"
          label="Description"
          value={description}
          onChange={handleChange}
          variant="outlined"
        />
          <TextField
          id="outlined-name"
          label="Location"
          value={location}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      </form>
  )
}
     
