import React, { Component } from "react";
import { Collapse } from "reactstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, background: "#eb6864" };
  }

  ReloadWindow = e => {
    window.location.assign(e.target.name);
    setTimeout(function () {
      window.location.reload();
    }, 8);
  }

  toggle() {
    if (this.state.collapse) {
      this.setState({ background: "#eb6864" });
    } else {
      this.setState({ background: "#ec4f5f" });
    }
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Sponsors</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor1</a>
          </li>
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor2</a>
          </li>
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor3</a>
          </li>
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor4</a>
          </li>
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor5</a>
          </li>
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor6</a>
          </li>
          <li>
            <a onClick={this.ReloadWindow} name="#">Sponsor7</a>
          </li>
          <li className="active">
            <a
              href="#placeHolder"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={this.toggle}
              style={this.state}
              id="dropDown"
            >
              Favorites
            </a>
            <Collapse isOpen={this.state.collapse}>
            <ul className="list-unstyled">
                <li>
                  <a href="#">Thanks</a>
                </li>
                <li>
                  <a href="#">Thanks</a>
                </li>
                <li>
                  <a href="#">Thanks</a>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
