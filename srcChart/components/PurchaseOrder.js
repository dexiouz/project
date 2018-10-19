import React, { Component } from "react";
import { Layout, Breadcrumb, Row } from "antd";
import ListPurchaseOrder from './ListPurchaseOrder.js';
const Content = Layout;

class PurchaseOrder extends Component {
  render() {
    return (
      <Content style={{width: '83vw',float: 'right', marginRight: '2em'}}>
        <Breadcrumb style={{ margin: '16px', marginLeft: '60px' }}>
          <Breadcrumb.Item>Store</Breadcrumb.Item>
          <Breadcrumb.Item>Purchase Order</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ marginLeft: '40px', background: '#fff', minHeight: '100vh', boxShadow: '0px 2px 20px 3px #b6b6b6', borderRadius: 5, padding: '1.5em', marginLeft: 60 }}>

          <Row type="flex" justify="space-around">
            <ListPurchaseOrder />
          </Row>

        </div>


      </Content>
    )
  }
}

export default PurchaseOrder;