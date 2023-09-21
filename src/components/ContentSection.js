import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const {  Content } = Layout;


class ContentSection extends React.Component{
    render(){
        return (
            <Content style={{margin: "24px 16px 0px", minHeight: "100vh", height:"100%"}}>Content</Content>
        )
    }
}

export default ContentSection;