import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const {SubMenu} = Menu;

const StyledMenu = styled(Menu)`
  background-color: transparent;
  color:#FFFFFFA6;
  font-size: 20px;
  font-weight: bold;

  .ant-menu-item:hover {
    color: white !important; // Change the text color when hovering
  }

  .ant-menu-item-selected {
    background-color: #1890ff !important;
    color: white !important;
    }
`;

const StyledSubMenu = styled(SubMenu)`
    .ant-menu-submenu-title:hover {
    color: white !important;
    }

    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after {
    background: white !important;
    } 
    
    &.ant-menu-submenu-selected {
        .ant-menu-submenu-title {
          color: white; /* Change the text color when selected */
        }
      }

`
 const customMenuItem = {
    margin:"0px",
    backgroundColor: "#141414",
    color: "#FFFFFFA6",
}

const logo = {
    margin: "20px 0px 20px 30px",
    fontSize: "34px",
    fontWeight: "600",
  }



class SiderSection extends React.Component {
    render() {
        return (
            <Sider style={{ backgroundColor: "rgb(60, 66, 72)" }}>

                    <div style={ logo }>
                        {/* <div  style={{ marginTop: "20px", marginLeft: "30px"  }}> */}
                            <span style={{ fontSize: "100%", color: "rgb(246, 137, 28)" }}>S</span>
                            <span style={{ fontSize: "80%", color: "rgb(255, 255, 255)" }}>UNTZU</span>
                        {/* </div> */}
                    </div> 

                    <StyledMenu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                            <Link to="/dashboard"></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="pie-chart" />
                            <span>Sample</span>
                            <Link to="/sample"></Link>
                        </Menu.Item>
                        <StyledSubMenu 
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="area-chart" />
                                    <span>QC Dashboard</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3" style={ customMenuItem } >
                                <Icon type="line-chart" />
                                <span>LiquidHallMark</span>
                                <Link to="/qcdashboard/liquidhallmark"></Link>
                            k</Menu.Item>
                        </StyledSubMenu >
                        <StyledSubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="profile" />
                                    <span>Order</span>
                                </span>
                            }
                        >
                     
                            <Menu.Item key="4" style={ customMenuItem }>
                                <Icon type="file-text" />
                                <span>Order list</span>
                                <Link to="/order/all"></Link>
                                </Menu.Item>
                            <Menu.Item key="5" style={ customMenuItem }> 
                                <Icon type="file-text" />
                                <span>External Order</span>
                                <Link to="/order/external"></Link>
                            </Menu.Item>
                            <Menu.Item key="6" style={ customMenuItem }>
                                <Icon type="usergroup-delete" />
                                <span>Physician Info </span>
                                <Link to="/order/physician"></Link>
                                </Menu.Item>
                   
                        </StyledSubMenu>
                        <StyledSubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="bg-colors" />
                                    <span>Sample Sheet</span>
                                </span>
                            }
                        >
                            <Menu.Item key="7" style={ customMenuItem } >
                                <Icon type="bg-colors" />
                                <span>Samples</span>
                                <Link to="/samplesheet/samples"></Link>
                            </Menu.Item>
                            <Menu.Item key="8" style={ customMenuItem } >
                                <Icon type="table" />
                                <span>Sample Sheet</span>
                                <Link to="/samplesheet/samplesheet"></Link>
                                </Menu.Item>
                        </StyledSubMenu>
                        <Menu.Item key="9">
                            <Icon type="tags" />
                            <span>Analysis</span>
                        </Menu.Item>

                        <StyledSubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="file-text" />
                                    <span>Report</span>
                                </span>
                            }
                        >
                            <Menu.Item key="10" style={ customMenuItem } ><Icon type="file-text" />Generating</Menu.Item>
                            <Menu.Item key="11" style={ customMenuItem } > <Icon type="file-search" />Clinical Trial</Menu.Item>
                        </StyledSubMenu>
                        <Menu.Item key="12">
                            <Icon type="file-search" />
                            <span>Report Review</span>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Icon type="mail" />
                            <span>Email</span>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <Icon type="file-text" />
                            <span>Hallmark</span>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <Icon type="file-text" />
                            <span>MCED</span>
                        </Menu.Item>
                        <Menu.Item key="16">
                            <Icon type="usergroup-delete" />
                            <span>Patient</span>
                        </Menu.Item>
                    </StyledMenu>

   
            </Sider>
        )
    }
}

export default SiderSection;