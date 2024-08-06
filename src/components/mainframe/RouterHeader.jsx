import react from "react";
import {withRouter, Link} from "react-router-dom";
import { Breadcrumb } from "antd";
// import BreadCrumb from "../BreadCrumb";

export const RouterHeader = withRouter((props) => {
    const {location} = props;
    console.log("Location ", location.pathname);
    const url = location.pathname;
    const name = BreadcrumMap[url];
    return(
        <Breadcrumb>
        <Breadcrumb.Item>
            {name}
        </Breadcrumb.Item>
        </Breadcrumb>
    )
});

const BreadcrumMap = {
    "/short_bio": "Short Bio",
    "/edu_background" : "Education Background",
    "/work_experience" : "Work Experience",
    "/skill" : "Skill",
    "/hobby" : "Hobby",
    "/generate_resume" : "Generate Resume",
};