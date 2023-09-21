import React from 'react';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';


class User extends React.Component{
    render(){
        return (
            <div>
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>M</Avatar>
                <span style={{marginLeft:"5px" }}>mary.wong</span>
                
            </div>
        )
    }
}

export default User;