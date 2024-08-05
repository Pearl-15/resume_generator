import React from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import TimeStamp from '../TimeStamp';
import User from '../User';
const { Header } = Layout;


class HeaderSection extends React.Component {

    handleMenuFold = () => {
        this.props.onClick();
    }
    render() {
        return (
            <Header style={{ background: "#ffffff", color: "rgb(118, 118, 118)", paddingLeft: "2%", marginLeft: "0px" }}>

                <Row>
                    <Col span={12}>
                        {this.props.type ? 
                        <>
                        <Icon type="menu-unfold" style={{fontSize: "21px", textAlign:"left"}} onClick={this.handleMenuFold}/>
                        <span style={{marginLeft:"5px" }}>
                        <span style={{fontSize: "150%", color:"rgb(246, 137, 28)"}}>Resume</span>
                        <span style={{fontSize: "135%", color:"rgb(60, 66, 72)"}}> Generator</span>
                        </span>
                        </>
                        : 
                        <Icon type="menu-fold" style={{fontSize: "21px", textAlign:"left"}} onClick={this.handleMenuFold}/>}
                    </Col>

                    <Col span={8}>
                        <TimeStamp />
                    </Col>

                    <Col span={4} style={{textAlign: 'right'}}>
                        <User />
                    </Col>

                </Row>


            </Header>
        )
    }
}

export default HeaderSection;



