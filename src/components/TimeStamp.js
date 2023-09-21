import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const today = moment();
const dateFormat = 'ddd DD MMM YYYY, hh:mm A ZZ';


class TimeStamp extends React.Component{

    formatDate = (date) => {
        return (moment(date).format('ddd DD MMM YYYY, hh:mm A ZZ'));
      }
     
    render(){
        return (
            <div>{this.formatDate(today)}</div>
        )
    }
}

export default TimeStamp;