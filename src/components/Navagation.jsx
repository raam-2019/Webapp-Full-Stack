import React, { Component } from 'react';
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
                </ul>
                <ul className="nav navbar-nav" style={{float: "right"}}>
                  <li style={{ display: "inline" }}>
                    <div>SOmething</div>
                  </li>
                </ul>
              </div>
            </nav>
          </Row>
         );
    }
}
 
export default Navagation;