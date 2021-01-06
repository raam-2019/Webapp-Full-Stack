import React, { Component } from 'react';
import {Container, Row, Col, Button} from "reactstrap";
import "../css/stylesheet.css";

class EventPage extends Component {
    render() {
        return (
            <Container style={{paddingTop: "2rem"}}>
                <Row>
                    <Col xs="1"></Col>
                    <Col><h1 style = {{textAlign: "center"}}>Event(s)?</h1></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row>
                    <Col xs="1"></Col>
                    <Col><div style={{textAlign: "center", fontSize: "18px"}}>TODO TODO TODO TODO</div></Col>
                </Row>
            </Container>
        )
    }
}
export default EventPage;