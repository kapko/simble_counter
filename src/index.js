import React, { Component } from "react";
import { render } from "react-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// local files
import "./style.css";
import InputComponent from './input';
import DatePickerComponent from "./date-picker";
import SwitcherComponent from './switcher';
import Descriptions from './descriptions';

class App extends Component {
  state = {
    monthCount: 1,
    value: 0,
    result: 0,
    date: '',
    showText: false,
    showTotalCalculator: true,
  }

  monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }

  onDateUpdate = date => {
    const monthCount = this.monthDiff(new Date(), date);
    this.setState({ monthCount, date, showText: false });
  }

  onInputUpdate = value => {
    this.setState({ value, showText: false });
  }

  onSwitchChange = value => {
    this.setState({ showTotalCalculator: value, showText: false });
  }

  getTotalCount = () => {
    const { value, monthCount } = this.state;
    let result = value / monthCount;

    if (result === Infinity || isNaN(result)) {
      this.setState({ result: 0, showText: true });
    } else {
      this.setState({ result: result.toFixed(2), showText: true });
    }
  }

  render() {
    return (
      <Card className="card">
        <CardContent>
          <div className="card-inner">
            <SwitcherComponent {...this.state} onChange={this.onSwitchChange} />
            <InputComponent  {...this.state} onChange={this.onInputUpdate} />
            <DatePickerComponent {...this.state} onChange={this.onDateUpdate} />
            <Descriptions {...this.state} />
            <Button
              onClick={this.getTotalCount}
              variant="contained"
              color="primary">Finish</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

}

render(<App />, document.getElementById("root"));
