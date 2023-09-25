import React from 'react';
import './App.css';
import { Layout, Card } from 'antd';
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import SiderSection from './components/SiderSection';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sample from './components/Sample';
import OrderList from './components/OrderList';
import ExternalOrder from './components/ExternalOrder';
import PhysicianInfo from './components/PhysicianInfo';
import LiquidHallMark from './components/LiquidHallMark';
import Samples from './components/Samples';
import SampleSheet from './components/SampleSheet';
import Analysis from './components/Analysis';
import Generating from './components/Generating';
import ClinicalTrail from './components/ClinicalTrial';
import BreadCrumb from './components/BreadCrumb';

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
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/sample" component={Sample} />
                    <Route exact path="/qc_dashboard/liquidhallmark" component={LiquidHallMark} />
                    <Route exact path="/order/all" component={OrderList} />
                    <Route exact path="/order/external" component={ExternalOrder} />
                    <Route exact path="/order/physician" component={PhysicianInfo} />
                    <Route exact path="/sample_sheet/samples" component={Samples} />
                    <Route exact path="/sample_sheet/sheet" component={SampleSheet} />
                    <Route exact path="/analysis" component={Analysis} />
                    <Route exact path="/report" component={Generating} />
                    <Route exact path="/report/clinical_trail" component={ClinicalTrail} />
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
