import React, { Component } from "react";
import { connect } from "react-redux";
//import { addInfoToDB, addToCSV } from "../actions/itemActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class itemModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeSchool = e => {
    this.setState({ school: e.target.value });
  };

  onChangeWork = e => {
    this.setState({ work: e.target.value });
  };

  onChangeSong = e => {
      this.setState({ song: e.target.value });
  };

  onChangeInfo = e => {
      this.setState({ info: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log();
    //this.props.addToCSV(myData);
    //this.props.addInfoToDB(myData);
    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <a className="nav-link" onClick={this.toggle}>
          Feedback
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>RAAM Feedback</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Your name"
                  onChange={this.onChangeName}
                />
                <Input
                  type="text"
                  name="school"
                  id="item"
                  placeHolder="What did you like?"
                  onChange={this.onChangeSchool}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="work"
                  id="item"
                  placeHolder="What did you dislike?"
                  onChange={this.onChangeWork}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="song"
                  id="item"
                  placeHolder="How can we improve?"
                  onChange={this.onChangeSong}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="info"
                  id="item"
                  placeHolder="Contact Information"
                  onChange={this.onChangeInfo}
                  style={{ marginTop: "10px" }}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default itemModal;
/*
const mapStateToProps = state => ({
    item: state.item
  });


export default connect(
  mapStateToProps,
  { addToCSV, addInfoToDB }
)(itemModal);
*/