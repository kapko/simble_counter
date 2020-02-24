import React from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// local files
import { inputText } from "./text.const";

export default function InputComponent(props) {
  const [value, setValue] = React.useState('');
  const label = props.showTotalCalculator ? inputText.total : inputText.month;

  const changeValue = ({ target }) => {
    setValue(target.value);
    props.onChange(parseInt(target.value));
  }

return <div className="field">
    <TextField
      style={{ width: '100%' }}
      id="input-with-icon-textfield"
      label={label}
      type="number"
      value={value}
      onChange={changeValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        ),
      }}
    />
  </div>
}
