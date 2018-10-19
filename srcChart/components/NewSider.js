import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import DashboardView from "./DashboardView";
import Home from "./Home.js";
import CreateStore from "./CreateStore.js";
import StoreDetails from "./StoreDetails.js";
import CreateCategory from "./CreateCategory.js";
import Categories from "./Categories.js";
import CreateProduct from "./CreateProduct.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import { Route, Link } from "react-router-dom";
import SalesOrder from './SalesOrder';
import PurchaseOrder from './PurchaseOrder';
import CreateProductListForm from './CreateProductListForm'


const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu


export default class NewSider extends Component{
  render(){
    return(
      <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => { console.log(broken); }}
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      style={{height: '100vh', position: 'fixed'}}

      >
      <div className='sider-1'>
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}   >


      <SubMenu

      key="sub7"
      title={<span><Icon type="home" /><span>My Stores</span></span>}
    >
      <Menu.Item  key="setting:6g"><Icon type="ordered-list" />
          Stores
          <Link to="store"/>
        </Menu.Item>
      <Menu.Item key="setting:7g"><Icon type="plus" />Create<Link to="create_store"/></Menu.Item>
   </SubMenu>

        <SubMenu
        // disabled={disabled}
          key="sub2"
          title={<span><Icon type="audit" /><span>Stock</span></span>}
        >
          <Menu.Item key="setting:9"><Icon type="swap" />Stock Transfer</Menu.Item>
        </SubMenu>
        <SubMenu
        key="sub64"
        title={<span><Icon type="profile" /><span>Categories</span></span>}
      >
        <Menu.Item key="setting:6"><Icon type="ordered-list" />List<Link to="categories"/></Menu.Item>
        <Menu.Item key="setting:7"><Icon type="plus" />Create<Link to="create_category"/></Menu.Item>
      </SubMenu>

      <SubMenu
      key="sub54"
      title={<span><Icon type="cluster" /><span>Segments</span></span>}
    >
      <Menu.Item key="setting:66"><Icon type="ordered-list" />List</Menu.Item>
      <Menu.Item key="setting:77"><Icon type="plus" />Create</Menu.Item>
    </SubMenu>

    <SubMenu
        key="subd6"
        title={<span><Icon type="profile" /><span>Products</span></span>}
      >
        <Menu.Item key="setting:65"><Icon type="ordered-list" />List<Link to="products"/></Menu.Item>
        <Menu.Item key="setting:76"><Icon type="plus" />Create<Link to="CreateProductListForm"/></Menu.Item>
      </SubMenu>
        {/* <Menu.Item key="Sales" disabled={disabled}>
          <Icon type="shopping-cart" />
          <span>Sales</span>
        </Menu.Item> */}
        <SubMenu
        // disabled={disabled}
          key="sub9"
          title={<span><Icon type="shopping-cart" /><span>Sales</span></span>}
        >
          <Menu.Item key="setting:11"><Icon type="ordered-list" />Sales Order<Link to="view_sales"/></Menu.Item>
          {/* <Menu.Item key="setting:12"><Icon type="plus" />Create Order</Menu.Item> */}
        </SubMenu>

        <SubMenu
        // disabled={disabled}
          key="sub11"
          title={<span><Icon type="book" /><span>Purchase</span></span>}
        >
          <Menu.Item key="purchase-13:"><Icon type="ordered-list" />Purchase Order<Link to="purchase_order"/></Menu.Item>
          <Menu.Item key="purchase-23"><Icon type="plus" />Create Order</Menu.Item>
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
          key="sub6"
          title={<span><Icon type="team" /><span>Staff</span></span>}
        >
          <Menu.Item key="setting:6t"><Icon type="ordered-list" />Staffs</Menu.Item>
          <Menu.Item key="setting:7t"><Icon type="plus" />Create Staff</Menu.Item>
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
      </div>
    </Sider>
    <Layout>
      <Content>
        <div>
        <Route exact path="/" component={DashboardView} />
        <Route exact path="/store" component={Home} />
        <Route exact path="/create_store" component={CreateStore} />
        <Route exact path="/details" component={StoreDetails} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/create_category" component={CreateCategory} />
        <Route exact path="/create_product" component={CreateProduct} />


        <Route exact path="/createProductListForm" component={CreateProductListForm} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/view_product" component={ProductDetails} />
        <Route exact path="/view_sales" component={SalesOrder} />
        <Route exact path="/purchase_order" component={PurchaseOrder} />

        </div>
      </Content>
    </Layout>
  </Layout>
    )
  }
}


