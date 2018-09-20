import React, { Component } from "react";
import { Layout } from "antd";
import '../styles/FooterLite.css';


// Define Footer subClass for Layout
const Footer = Layout;

class FooterLite extends Component {
  render() {
    return (
      <Footer className="footer-lite">

      </Footer>
    )
  }
}

export default FooterLite;