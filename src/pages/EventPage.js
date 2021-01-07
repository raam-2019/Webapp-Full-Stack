import React, { Component } from 'react';
import {Container, Row, Col, Button} from "reactstrap";
import Navagation from "../components/Navagation";
import MapBoxmain from "../components/MapBox Components/Mapboxmain";
import "../css/stylesheet.css";

class EventPage extends Component {
    render() {
        return (
            <div>
                {/* <Navagation /> */}
            <Container style={{paddingTop: "2rem"}}>
                <Row>
                    <Col xs="1"></Col>
                    <Col><h1 style = {{textAlign: "center"}}>Events</h1></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col xs="1"></Col>
                    <Col><MapBoxmain /></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col xs="1"></Col>
                    <Col><div style = {{textAlign: "center"}}>User participation meter</div></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row>
                    <Col xs="1"></Col>
                    <Col><div style = {{textAlign: "left"}}>Why pledge this athlete?</div></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row>
                    <Col xs="1"></Col>
                    <Col><div style = {{textAlign: "left"}}>User interaction option</div></Col>
                    <Col xs="1"></Col>
                </Row>
            </Container>
            </div>
        )
    }
}
export default EventPage;