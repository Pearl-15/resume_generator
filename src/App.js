import React from 'react';
import './App.css';
import { Layout, Card } from 'antd';
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import SiderSection from './components/SiderSection';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreadCrumb from './components/BreadCrumb';
import Orders from './components/Orders';
import OrderSheet from './components/OrderSheet';
import GenerateResume from './components/GenerateResume';

const { Content } = Layout;
// Testing Git

class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (

        <Router>
          <Layout>
            {!this.state.collapsed && (<SiderSection trigger={null} collapsible collapsed={this.state.collapsed}/>)}
            <Layout>
              <HeaderSection type={this.state.collapsed} onClick={this.toggle}/>
              <Content style={{ margin: "24px 16px 0px", minHeight: "100vh", height: "100%" }}>
                <BreadCrumb />
                <Card style={{ minHeight: "100vh", height: "100%" }}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/orders" component={Orders} />
                    <Route exact path="/ordersheet" component={OrderSheet} />
                    <Route exact path="/generateresume" component={GenerateResume} />
                  </Switch>
                </Card>
              </Content>
              <FooterSection />
            </Layout>
          </Layout>
        </Router>
    )
  }
}

export default App;
