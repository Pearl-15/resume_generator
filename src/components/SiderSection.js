import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Link, NavLink, withRouter } from 'react-router-dom';
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

  
  

  //////////// New added
  const customActiveLinkStyle = {
    backgroundColor: 'transparent',
    color: '#FFFFFFA6',
    fontSize: '20px',
    fontWeight: 'bold',
  };
  
  // Merge with any additional styles you want for active links
  const activeLinkStyles = {
    ...customActiveLinkStyle,
    backgroundColor: '#1890ff',
    color: 'white',
  };

  function isActive(path, key) {
    const currentPath = window.location.pathname;
  
    if (currentPath === path) {
        console.log("currentPath Key is ", key)
      return key;
    } else {
      return customActiveLinkStyle; // Use the customActiveLinkStyle for non-active links
    }
  }
  



class SiderSection extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            selectedPath:''
        }
    }

    componentDidMount() {
        // Call updateSelectedKey in componentDidMount to set the initial selected key
        const { history, location: { pathname } } = this.props;
        console.log("sidebar pathname ", pathname)

        this.updateSelectedKey(pathname);
      }
    
      componentDidUpdate(prevProps) {
        // Check if the URL location has changed and update the selected menu item
        if (this.props.location.pathname !== prevProps.location.pathname) {
          this.updateSelectedKey(this.props.location.pathname);
        }
      }

    updateSelectedKey= (pathname)=> {       
        this.setState({
            selectedKey: pathname
        })         
    }
    
    render() {

        return (
            <Sider style={{ backgroundColor: "rgb(60, 66, 72)" }} trigger={this.props.trigger} collapsible collapsed={this.props.collapsed}>

                    <div style={ logo }>
                            <span style={{ fontSize: "100%", color: "rgb(246, 137, 28)" }}>Resume</span>
                            <span style={{ fontSize: "80%", color: "rgb(255, 255, 255)" }}> G</span>
                    </div> 

                    <StyledMenu mode="inline" selectedKeys={[this.state.selectedKey]}>
                        <StyledSubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="bg-colors" />
                                    <span>Order</span>
                                </span>
                            }
                        >
                            <Menu.Item key="/orders" style={ customMenuItem } >
                                <Icon type="bg-colors" />
                                <span>Order Table</span>
                                <Link to="/orders"></Link>
                            </Menu.Item>
                            <Menu.Item key="/ordersheet" style={ customMenuItem } >
                                <Icon type="table" />
                                <span>Order Sheet</span>
                                <Link to="/ordersheet"></Link>
                                </Menu.Item>
                        </StyledSubMenu>
                        <Menu.Item key="/generateresume">
                            <Icon type="tags" />
                            <span>Generate Resume</span>
                            <Link to="/generateresume"></Link>
                        </Menu.Item>

                    </StyledMenu>

   
            </Sider>
        )
    }
}

export default withRouter(SiderSection);