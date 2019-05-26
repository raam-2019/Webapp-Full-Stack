import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap";
import MapBoxComp from "../components/MapBox Components/MapBox";
import Navagation from "../components/Navagation";

class FanDataPage extends Component {
    render() { 
        return (
            <div id="FanPageWrapper">
                <Navagation />
                <Container fluid="true">
                    <Row>
                    <Col xs="1"></Col>
                    <Col xs="10">
                        <Row>
                            <Col style={{maxWidth: "70%"}}>
                                <MapBoxComp />
                            </Col>
                            <Col style={{maxWidth: "20%", background: "red"}}>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{maxWidth: "50%", background: "purple"}}>
                                <MapBoxComp />
                            </Col>
                            <Col style={{maxWidth: "50%", background: "green"}}>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{maxWidth: "50%", background: "blue"}}>
                                <MapBoxComp />
                            </Col>
                            <Col style={{maxWidth: "50%", background: "orange"}}>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1"></Col>
                    </Row>
                </Container>
            </div> 
         );
    }
}
 
export default FanDataPage;