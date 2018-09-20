import React, { Component } from "react";
import { Layout } from 'antd';
import HeaderNav from "./HeaderNav";
import FooterLite from "./FooterLite";
import NewSider from "./NewSider"
import NewHeader from "./NewHeader"
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Layout>
        <NewHeader />
        <HeaderNav />

      {/* Single Ant Layout Section Implement Sidebar and Inner Dashboard Component */}
        <Layout style={{ minHeight: '100vh' }}>
        {/* import sidebar nav in parent layout */}
        <NewSider />
    {/* <SideNavigation /> */}

        {/* import dashboardview in child layout element */}
          {/* <Layout>
            <Route exact path="/" component={DashboardView} />
            <Route exact path="/store" component={Home} />
            <Route exact path="/create_store" component={CreateStore} />
          </Layout> */}
<div>hello</div>
        </Layout>
  

        <FooterLite />
      </Layout>
      </Router>
    )
  }

}



export default Dashboard;
