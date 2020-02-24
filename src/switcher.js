import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// local files
import { switcherText } from './text.const';

export default function SwitcherComponent(props) {
    const [value, setValue] = React.useState(props.showTotalCalculator);
    const label = value ? switcherText.total : switcherText.month;

    const onChange = () => {
        setValue(!value);
        props.onChange(!value);
    }

    return <FormControlLabel
        control={<Switch color="primary" onChange={onChange} checked={value} value={value} />}
        label={label} />
}

SwitcherComponent.propTypes = {
    showTotalCalculator: PropTypes.bool,
    onChange: PropTypes.func
}
