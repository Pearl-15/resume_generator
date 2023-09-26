import React from 'react';
import { Tag } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const today = moment();
const dateFormat = 'ddd DD MMM YYYY, hh:mm A ZZ';

class TimeStamp extends React.Component{

    formatDate = (date) => {
        return (moment(date).format(dateFormat));
      }
     
    render(){
        return (
            <div style={{textAlign:"end"}}>
                <Tag style={{fontSize:"12px", padding:"5px 8px", fontWeight:"bold", backgroundColor:"transparent"}} >{this.formatDate(today)}</Tag>
            </div>
        )
    }
}

export default TimeStamp;