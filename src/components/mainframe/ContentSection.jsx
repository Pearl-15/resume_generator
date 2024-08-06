import React from 'react';
import { Breadcrumb, Layout, Card } from 'antd';
import {withRouter } from "react-router-dom";
import {Switch, Route} from "react-router";
import ShortBio from '../short_bio/ShortBio';
import EducationBackground from '../edu_background/EducationBackground';
import WorkExperience from '../work_experience/WorkExperience';
import Hobby from '../hobby/Hobby';
import  GenerateResume  from "../generate_resume/GenerateResume";
import Skill from '../skill/Skill';
import { RouterHeader } from './RouterHeader';

const {  Content } = Layout;

class ContentSection extends React.Component{
    render(){
        return (
            <Content 
            style={{
            margin: "24px 16px 0px", 
            minHeight: "100vh", 
            height:"100%"
            }}
            >
            <RouterHeader />
            <Card style={{ minHeight: "100vh", height: "100%" }}>
                <Switch>
                 <Route exact path="/short_bio" component={ShortBio} />
                 <Route exact path="/edu_background" component={EducationBackground} />
                 <Route exact path="/work_experience" component={WorkExperience} />
                 <Route exact path="/skill" component={Skill} />
                 <Route exact path="/hobby" component={Hobby} />
                 <Route exact path="/generate_resume" component={GenerateResume} />
                </Switch>
              </Card>
            </Content>
        )
    }
}

export default withRouter(ContentSection);