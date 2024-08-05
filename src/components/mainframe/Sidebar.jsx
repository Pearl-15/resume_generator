import { Layout, Menu, Icon } from "antd";
import { Component } from "react";

const {Sider} = Layout;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "/order/all",
        }
    }

    handleMenuClick = (e) => {

        console.log("$$$ current selected menu", e.key);

        this.setState({
            current: e.key
        }) 
        
    }

    render() {

        const collapsed = this.props.collapsed;

        return (
            <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            >
            
            {/* //logo */}
            <div style={{margin: 10}}>
           
                <div
                style={{
                    fontSize: 32,
                    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.75)",
                }}
                >
                <span style={{ color: "white" }}> {collapsed ? "R" : "Resume"}</span>
                </div>
        
            </div>
         

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleMenuClick}>
              <Menu.Item key="bio">
                <Icon type="user" />
                <span>Short Bio</span>
              </Menu.Item>
              <Menu.Item key="edu_background">
                <Icon type="trophy" />
                <span>Education</span>
              </Menu.Item>
              <Menu.Item key="work_experience">
                <Icon type="solution" />
                <span>Work Experience</span>
              </Menu.Item>
              <Menu.Item key="skill">
                <Icon type="build" />
                <span>Skill</span>
              </Menu.Item>
              <Menu.Item key="hobby">
                <Icon type="heart" />
                <span>Hobby</span>
              </Menu.Item>
              <Menu.Item key="generate_resume">
                <Icon type="file-text" />
                <span>Generate Resume</span>
              </Menu.Item>
            </Menu>
          </Sider>
        )
    }
}

export default Sidebar;
