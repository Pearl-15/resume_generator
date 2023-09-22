import React from 'react';
import './App.css';
import { Layout } from 'antd';
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

const {Content} = Layout;

class App extends React.Component{

    render(){
      return(
        <div>  
          <Router>
            <Layout>
              <SiderSection />
              <Layout>
                <HeaderSection />
                <Content style={{margin: "24px 16px 0px", minHeight: "100vh", height:"100%"}}>
                  <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/sample" component={Sample} />
                  <Route exact path="/qcdashboard/liquidhallmark" component={LiquidHallMark} />
                  <Route exact path="/order/all" component={OrderList} />
                  <Route exact path="/order/external" component={ExternalOrder} />
                  <Route exact path="/order/physician" component={PhysicianInfo} />
                  <Route exact path="/samplesheet/samples" component={Samples} />
                  <Route exact path="/samplesheet/samplesheet" component={SampleSheet} />
                  
                  </Switch>
                  </Content>
           
                
                
                <FooterSection />
              </Layout>
            </Layout>
          </Router> 
        </div>
      )
    }
 }

export default App;
