import React from 'react';
import { Layout, Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import path from 'path';
import { title } from 'process';
const { Content } = Layout;
const { Text } = Typography;




class BreadCrumb extends React.Component {

    toTitleCase = (name) => {
        return name.replace(/\w\S*/g, (text) => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        }).replace(/_/g, " ");
    }

    render() {
        const { history, location: { pathname } } = this.props;

        //create pathnames array 
        const pathnames = pathname.split("/").filter(x => x);
        console.log("pathnames ", pathnames)

        return (

            <div>


                <Breadcrumb>

                    <Breadcrumb.Item>
                        <Link to="/order">Home</Link>
                    </Breadcrumb.Item>



                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        

                        return (<Breadcrumb.Item key={index}>
                            <Link to={`${routeTo}`}>{this.toTitleCase(name)}</Link>
                        </Breadcrumb.Item>)
                    })}

                </Breadcrumb>



            </div>

        );
    }
}

export default withRouter(BreadCrumb);