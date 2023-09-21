import React from 'react';
import './App.css';
import { Layout } from 'antd';
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import ContentSection from './components/ContentSection';
import SiderSection from './components/SiderSection';

class App extends React.Component{

    render(){
      return(
        <div>   
          <Layout>
            <SiderSection />
            <Layout>
              <HeaderSection />
              <ContentSection />
              <FooterSection />
            </Layout>
          </Layout>
        </div>
      )
    }
 }

export default App;
