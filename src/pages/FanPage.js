import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap";
import MapBoxmain from "../components/MapBox Components/Mapboxmain";
import Widget from "../components/Widgets/Widget";
import Footer from "../components/Footer";
import Navagation from "../components/Navagation";
import Sidebar from "../components/Sidebar2";

import "../css/fanexperience.css";
import "../css/stylesheet.css";

class FanPage extends Component {
    render() { 
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content">
                    <Navagation />
                    <MapBoxmain />
                    <br />
                    <Container className="App" fluid="true">
                        <Widget heading="Stat 1" rowspan={3} />
                        <Widget heading="Stat 2"/>
                        <Widget heading="Some graph shit" colspan={2} rowspan={2}/>
                        <Widget heading="Some more stat"/>
                        <Widget heading="ThisAndThat"/>
                        <Widget heading="RAAM"/>
                    </Container>
                    <Footer />
                </div>
            </div> 
         );
    }
}
 
export default FanPage;