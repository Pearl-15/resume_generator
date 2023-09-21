import React from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
const { Header } = Layout;


class HeaderSection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isMenuFold: false,
        }
    }

    handleMenuFold = ()=> {
        this.setState({
            isMenuFold: !this.state.isMenuFold,
        })

    }
    render() {
        return (
            <Header style={{ background: "#ffffff", color: "rgb(118, 118, 118)", paddingLeft:"2%", marginLeft:"0px" }}>
                {/* <Icon
                    className="trigger"
                    // type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    // onClick={this.toggle}
                /> */}
              

                <Row>
                    <Col span={8}>
                        {this.state.isMenuFold ? 
                        <Icon type="menu-unfold" style={{fontSize: "21px", textAlign:"left"}} onClick={this.handleMenuFold}/>: 
                        <Icon type="menu-fold" style={{fontSize: "21px", textAlign:"left"}} onClick={this.handleMenuFold}/>}
                    </Col>
                    
                    <Col span={10}>
                        TimeStemp
                    </Col>


                    <Col span={2}>
                        Explore
                    </Col>

                    <Col span={4}>
                        Login
                    </Col>
                    
                </Row>


            </Header>
        )
    }
}

export default HeaderSection;



