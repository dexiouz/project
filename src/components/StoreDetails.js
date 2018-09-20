import React, { Component } from "react";
import { Layout, Breadcrumb, Row } from "antd";
import Details from './Details.js';
const Content = Layout;

class StoreDetails extends Component {
  render() {
    return (
      <Content style={{width: '83vw',float: 'right', marginRight: '2em'}}>
        <Breadcrumb style={{ margin: '16px', marginLeft: '40px' }}>
          <Breadcrumb.Item>Store</Breadcrumb.Item>
          <Breadcrumb.Item>Details</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ marginLeft: '40px', background: '#fff', minHeight: '100vh', boxShadow: '0px 2px 20px 3px #b6b6b6', borderRadius: 5, padding: '1.5em',  marginLeft: 60 }}>

          <Row type="flex" justify="space-around">
            <Details />
          </Row>

        </div>


      </Content>
    )
  }
}

export default StoreDetails;