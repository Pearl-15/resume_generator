import { Layout } from "antd";
import React, {Component} from "react";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import ContentSection from "./ContentSection";
import Sidebar from "./Sidebar";

class MainFrame extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }


    render() {
        return(
            <Layout>
                <Sidebar collapsed={this.state.collapsed}/>
                <Layout>
                    <HeaderSection type={this.state.collapsed} onClick={this.toggle}/>
                    <ContentSection />
                    <FooterSection />
                </Layout>
            </Layout>

            
        );
    }


}

export default (MainFrame);