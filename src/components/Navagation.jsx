import React, { Component } from 'react';
import ItemModal from "../components/ItemModals Components/itemModal";
import {
  Row
} from 'reactstrap';
import "../css/stylesheet.css";

class Navagation extends Component {
    render() { 
        return (
          <Row>
            <nav className="navbar navbar-expand-lg" style={{width: "100%"}}>
              <div className="container-fluid">
                <ul className="nav navbar-nav" style={{float: "left"}}>
                  <li style={{ display: "inline" }}>
                    <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={this.Sidebar_Click}>
                      <span /> <span /> <span />
                    </button>
                  </li>
                  <li className="nav-item active" style={{marginLeft: "1rem"}}>
                    <a className="index-title" href="https://www.google.com">
                      Race Across America
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav">
                  <li className="nav-items"><a className="nav-link">Features</a></li>
                  <li className="nav-items"><a className="nav-link">About</a></li>
                  <li className="nav-items"><a className="nav-link">Testimonials</a></li>
                  <li className="nav-items"><a className="nav-link">Download</a></li>
                  <li className="nav-items"><a className="nav-link" href="/Events">Events</a></li>
                  <li className="nav-items" style={{ display: "inline", float: "right" }}>
                    <ItemModal />
                  </li>
                </ul>
              </div>
            </nav>
          </Row>
         );
    }
}
 
export default Navagation;