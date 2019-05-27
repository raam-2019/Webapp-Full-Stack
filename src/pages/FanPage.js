import React, { Component } from 'react';
import {Container, Row, Col, Button} from "reactstrap";
import { API, graphqlOperation } from 'aws-amplify';
import { Racerdata, asset } from "../graphql/queries";
import { onUpdateAsset } from "../graphql/subscriptions";
import "../css/fanexperience.css";
import "../css/stylesheet.css";

import MapBoxmain from "../components/MapBox Components/Mapboxmain";
import Widget from "../components/Widgets/Widget";
import Widget1 from "../components/Widgets/Widget1";
import Footer from "../components/Footer";
import Navagation from "../components/Navagation";
import Sidebar from "../components/Sidebar2";

class FanPage extends Component {
    state = {users: [], error: ""}
    async componentDidMount(){
        const allRacerData = await API.graphql(graphqlOperation(Racerdata));
    
        this.setState({
          users: allRacerData.data.listRacerNj7uthp6pzfadg3eixfrzy5utmRaamenvs.items
        })
    }
    /*
    todoMutation = async () => {
        //change name and description to what you want to query to database
        const todoDetails = {
          name: document.getElementById("name").value,
          description: document.getElementById("description").value
        };
        
        const newEvent = await API.graphql(graphqlOperation(addTodo, todoDetails));
        alert(JSON.stringify(newEvent));
    }
    */
    listQuery = async () => {
        console.log('listing todos');
        const allTodos = await API.graphql(graphqlOperation(Racerdata));
        alert(JSON.stringify(allTodos));
    }
    listAsset = async () => {
        console.log('listing todos');
        const allTodos = await API.graphql(graphqlOperation(onUpdateAsset));
        // alert(JSON.stringify(allTodos));
        console.log(allTodos);
    }
    
    showState = () => {
        console.log(this.state);
    }
    render() { 
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content">
                    <Navagation />
                    <MapBoxmain />
                    <br />
                    <Container className="App" fluid="true">
                        <Widget data={this.state} heading="Stat 1" rowspan={3} />
                        <Widget data={this.state} heading="Stat 2"/>
                        <Widget data={this.state} heading="Some graph shit" colspan={2} rowspan={2}/>
                        <Widget data={this.state} heading="Some more stat"/>
                        <Widget data={this.state} heading="ThisAndThat"/>
                        <Widget1 />
                    </Container>
                    <Footer />
                </div>
            </div> 
         );
    }
}
 
export default FanPage;