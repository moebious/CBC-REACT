import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    switchTrack: {
        backgroundColor: "#000"
    },
    switchBase: {
        color: "#000",
        "&.Mui-checked": {
            color: "green"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "green"
        }
    },
}));

export default function SwitchesSize() {
const classes = useStyles()
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <FormGroup>
  <FormControlLabel
    control={
      <Switch
        color="default"
        classes={{
          track: classes.switchTrack,
          switchBase: classes.switchBase,
        }}
        size="small"
        checked={checked}
        onChange={toggleChecked}
      />
    }
    label="Small"
    // classes={{ switchBase: classes.switchBase }}
  />
</FormGroup>
  );
}