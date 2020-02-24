import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker} from "@material-ui/pickers";

//local files
import { dateText } from "./text.const";

export default function DatePickerComponent(props) {
  const label = props.showTotalCalculator ? dateText.total : dateText.month;
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const [selectedDate, setSelectedDate] = React.useState(nextMonth);

  const handleDateChange = date => {
    setSelectedDate(date);
    props.onChange(date);
  };

  return <div className="field">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        variant="inline"
        openTo="year"
        disablePast="false"
        minDate={nextMonth}
        style={{ width: '100%' }}
        views={["year", "month"]}
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  </div>
}
