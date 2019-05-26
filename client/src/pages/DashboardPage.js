import React, { Component } from 'react';
import DashboardComp from "../components/Dashboard Components/dashboard";
import Navagation from "../components/Navagation";

class CustomDashboardPage extends Component {
    render() { 
        return (
            <div id="DashboardWrapper">
                <Navagation />
                <DashboardComp />
            </div> 
         );
    }
}
 
export default CustomDashboardPage;