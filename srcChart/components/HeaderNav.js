import React, { Component } from "react";
import { Layout, Menu, Icon, Divider } from 'antd';
import Avatar from '../Avatar';
import defaultPic from '../images/avatar.png';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { Header } = Layout;


class HeaderNav extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout>
        <Header  className="header header-nav-top-header">
          <div className="logo">
          <Icon type="appstore-o" />  Owner's_Store_Name
          </div>

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{
              lineHeight: '64px', right: '10px', float: 'right', marginRight: '0', height: 67
              }}
          >

            {/* <Menu.Item key="app">
              <Icon type="home" />Dashboard
            </Menu.Item> */}

            {/* <Menu.Item key="money">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer"><Icon type="calculator" />Shekels</a>
            </Menu.Item> */}

            {/* <SubMenu title={<span><Icon type="setting" />Store</span>}>
              <MenuItemGroup>
                <Menu.Item key="setting:1"><Icon type="shopping-cart" />Products</Menu.Item>
                <Menu.Item key="setting:2"><Icon type="barcode" />Barcode Scanner</Menu.Item>
                <Menu.Item key="setting:3"><Icon type="environment-o" />Locations</Menu.Item>
                <Menu.Item key="setting:4"><Icon type="global" />Suppliers</Menu.Item>
                <Menu.Item key="setting:5"><Icon type="usergroup-add" />Customers</Menu.Item>
                <Divider span="0" />
              </MenuItemGroup>

              <MenuItemGroup>
                <Menu.Item key="setting:6"><Icon type="wallet" />Sales Order</Menu.Item>
                <Menu.Item key="setting:7"><Icon type="export" />Purchase Order</Menu.Item>
                <Menu.Item key="setting:8"><Icon type="swap" />Stock Transfer</Menu.Item>
              </MenuItemGroup>
            </SubMenu> */}

            <SubMenu title={<span className="AvatarSpan"><Avatar image={defaultPic} username="rushhour" />      <span className="name">Owner's_Name</span>
            <Icon className="AvatarSpanIcon" type="down-circle-o" /></span>}>
              <MenuItemGroup>
                <Menu.Item key="setting:9"><Icon type="profile" />Account Settings </Menu.Item>
                <Menu.Item key="setting:"><Icon type="logout" />Sign out</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>


        </Header>
      </Layout>

    )
  }
}

export default HeaderNav;
