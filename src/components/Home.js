import React, { Component } from "react";
import { Layout, Breadcrumb, Row } from "antd";
import List_Stores from './List_Stores.js';
const Content = Layout;

class Home extends Component {
  render() {
    return (
      <Content style={{width: '83vw',float: 'right', marginRight: '2em'}}>
        <Breadcrumb style={{ margin: '16px', marginLeft: '60px' }}>
          <Breadcrumb.Item>Store</Breadcrumb.Item>
          <Breadcrumb.Item>Stores</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ marginLeft: '40px', background: '#fff', minHeight: '100vh', boxShadow: '0px 2px 20px 3px #b6b6b6', borderRadius: 5, padding: '1.5em', marginLeft: 60 }}>

          <Row type="flex" justify="space-around">
            <List_Stores />
          </Row>

        </div>
        
      </Content>
    )
  }
}

export default Home;