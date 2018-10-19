import React, { Component } from "react";
import Charts from './Charts';
import CanvasCharts from './CanvasCharts'
import { Layout, Breadcrumb, Row } from "antd";

// define content subClass of Layout in antd
const Content = Layout;

class DashboardView extends Component {
  render() {
    return (
      <Content style={{width: '83vw',float: 'right', marginRight: '2em'}}>
        {/* <Breadcrumb style={{ margin: '16px', marginLeft: '60px' }}>
          <Breadcrumb.Item>Store</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb> */}
        <div style={{ marginLeft: '40px', background: '#fff', minHeight: '100vh', boxShadow: '0px 2pyarx 20px 3px #b6b6b6', borderRadius: 5, padding: '1.5em', marginLeft: 60 }}>
        {/* <Charts /> */}
        {/* <CanvasCharts /> */}
          <Row type="flex" justify="space-around">
         

          </Row>

        </div>


      </Content>
    )
  }
}

export default DashboardView;