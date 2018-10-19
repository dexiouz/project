import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from '../images/logo.jpg'
import { Link } from "react-router-dom";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu


class SideNavigation extends Component {
  state = {
    collapsed: true,
    disabled: true
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    let {disabled} = this.state;
    return (


      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
        trigger={<Icon type="menu-fold" />}
      >
      <div className="avarta">
      <img className="logo-1" src={logo} alt=""/>
      </div>
      <Menu   theme="light" defaultSelectedKeys={['1']} mode="inline">

      <SubMenu

        key="sub7"
        title={<span><Icon type="home" /><span>My Stores</span></span>}
      >
        <Menu.Item  key="setting:6"><Icon type="ordered-list" />
            Stores
            <Link to="home"/>
          </Menu.Item>
        <Menu.Item key="setting:7"><Icon type="plus" />Create<Link to="create_store"/></Menu.Item>
     </SubMenu>


          <SubMenu
          // disabled={disabled}
            key="sub2"
            title={<span><Icon type="audit" /><span>Stock</span></span>}
          >
          <SubMenu
          key="sub6"
          title={<span><Icon type="profile" /><span>Categories</span></span>}
        >
          <Menu.Item key="setting:6"><Icon type="ordered-list" />List</Menu.Item>
          <Menu.Item key="setting:7"><Icon type="plus" />Create</Menu.Item>
        </SubMenu>
        <SubMenu
        key="sub5"
        title={<span><Icon type="cluster" /><span>Product Types</span></span>}
      >
        <Menu.Item key="setting:6"><Icon type="ordered-list" />List</Menu.Item>
        <Menu.Item key="setting:7"><Icon type="plus" />Create</Menu.Item>
      </SubMenu>
            <Menu.Item key="setting:8"><Icon type="bars" />Products</Menu.Item>
            <Menu.Item key="setting:9"><Icon type="swap" />Stock Transfer</Menu.Item>
          </SubMenu>

          <Menu.Item key="4r"
            // disabled={disabled}
            >
            <Icon type="cluster" />
            <span>Products</span>
          </Menu.Item>
         
          <SubMenu
          // disabled={disabled}
            key="sub9"
            title={<span><Icon type="shopping-cart" /><span>Sales</span></span>}
          >
            <Menu.Item key="setting:6"><Icon type="ordered-list" />Sales Order</Menu.Item>
            <Menu.Item key="setting:7"><Icon type="plus" />Create Order</Menu.Item>
          </SubMenu>

          <SubMenu
          // disabled={disabled}
            key="sub11"
            title={<span><Icon type="book" /><span>Purchase</span></span>}
          >
            <Menu.Item key="purchase-1:"><Icon type="ordered-list" />Purchase Order</Menu.Item>
            <Menu.Item key="purchase-2"><Icon type="plus" />Create Order</Menu.Item>
          </SubMenu>

          <SubMenu
          // disabled={disabled}
            key="sub12"
            title={<span><Icon type="car" /><span>Supply Chain</span></span>}
          >
            <Menu.Item key="purchase-1:"><Icon type="ordered-list" />Supplies</Menu.Item>
            <Menu.Item key="purchase-2"><Icon type="plus" />Create Supply</Menu.Item>
          </SubMenu>

          {/* <Menu.Item key="Supply"
          // disabled={disabled}
          >
            <Icon type="car" />
            <span>Supply Chain</span>
          </Menu.Item> */}
          <SubMenu
          // disabled={disabled}
            key="sub3"
            title={<span><Icon type="team" /><span>Staff</span></span>}
          >
            <Menu.Item key="setting:6"><Icon type="ordered-list" />Staffs</Menu.Item>
            <Menu.Item key="setting:7"><Icon type="plus" />Create Staff</Menu.Item>
          </SubMenu>
          <Menu.Item key="Shekels"
            // disabled={disabled}
            >
            <Icon type="dollar" />
            <span>Shekels</span>
          </Menu.Item>


          <Menu.Item key="2"
            // disabled={disabled}
            >
            <Icon type="desktop" />
            <span>Reports</span>
          </Menu.Item>

          <SubMenu
            key="sub4"
            // disabled={disabled}
            title={<span><Icon type="setting" /><span>Settings</span></span>}
          >
            <Menu.Item key="Tax:6"><Icon type="plus" />Create Tax</Menu.Item>
            <Menu.Item key="Unit:7"><Icon type="plus" />Create Unit</Menu.Item>
            <Menu.Item key="upload-1"><Icon type="upload" />Upload Logo</Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>




    );


  }
}


export default SideNavigation;