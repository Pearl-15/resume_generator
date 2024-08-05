import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import moment from "moment";

const {  Footer } = Layout;


class FooterSection extends React.Component{

    render(){
        const year = moment().year();
        return (
            <Footer style={{ textAlign: "center", color: "rgba(0,0,0,.65)", background: "#f0f2f5"}}>Copyright © {year}</Footer>
        )
    }
}

export default FooterSection;