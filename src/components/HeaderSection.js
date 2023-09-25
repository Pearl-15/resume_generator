import React from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import TimeStamp from './TimeStamp';
import User from './User';
const { Header } = Layout;


class HeaderSection extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isMenuFold: false,
    //     }
    // }

    handleMenuFold = () => {
        // this.setState({
        //     isMenuFold: !this.state.isMenuFold,
        // })
        this.props.onClick();

    }
    render() {
        return (
            <Header style={{ background: "#ffffff", color: "rgb(118, 118, 118)", paddingLeft: "2%", marginLeft: "0px" }}>

                <Row>
                    <Col span={8}>
                        {this.props.type ? 
                        <>
                        <Icon type="menu-unfold" style={{fontSize: "21px", textAlign:"left"}} onClick={this.handleMenuFold}/>
                        <span style={{marginLeft:"5px" }}>
                        <span style={{fontSize: "150%", color:"rgb(246, 137, 28)"}}>S</span>
                        <span style={{fontSize: "135%", color:"rgb(60, 66, 72)"}}>UNTZU</span>
                        </span>
                        </>
                        : 
                        <Icon type="menu-fold" style={{fontSize: "21px", textAlign:"left"}} onClick={this.handleMenuFold}/>}

                        {/* <Icon
                            type={this.props.type ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.handleMenuFold}
                            style={{fontSize: "21px", textAlign:"left"}}
                        /> */}
                    </Col>

                    <Col span={10}>
                        <TimeStamp />
                    </Col>


                    <Col span={2}>
                        Explore
                    </Col>

                    <Col span={4}>
                        <User />
                    </Col>

                </Row>


            </Header>
        )
    }
}

export default HeaderSection;



