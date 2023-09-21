import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const {  Footer } = Layout;


class FooterSection extends React.Component{
    render(){
        return (
            <Footer style={{ textAlign: "center", color: "rgba(0,0,0,.65)", background: "#f0f2f5"}}>Copyright © 2023 - Lucence Diagnostics. All Rights Reserved.</Footer>
        )
    }
}

export default FooterSection;