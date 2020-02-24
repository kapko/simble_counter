import React from 'react';

export default function Descriptions(props) {
    const currency = '$';
    const getMonth = date => {
        const now = new Date();
        const localDate = date || new Date(now.getFullYear(), now.getMonth() + 1, 1);
        return localDate.toLocaleString('en-US', { year: 'numeric', month: 'long' });
    };

    if (!props.showText) {
        return null;
    }

    if (props.showTotalCalculator) {
        return <div className="description">
            <h2>Monthly amount: <span>{currency}{props.result}</span> </h2>
            <h6>You are planning <b>{currency}{props.monthCount}</b> monthly deposits to reach your <b>{currency}{props.value}</b> goal by <b>{getMonth(props.date)}</b></h6>
        </div>
    } else {
        return <div className="description">
            <h2>Total amount: <span>{currency}{props.value}</span></h2>
            <h6>You are saving <b>{currency}{props.result}</b> monthly to save <b>{currency}{props.value}</b> by <b>{getMonth(props.date)}</b></h6>
        </div>
    }
}
