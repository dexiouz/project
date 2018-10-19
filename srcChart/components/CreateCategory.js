import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Col, Button, Form } from "antd";
import CategoryForm from './CategoryForm';
import '../styles/Styles.css';

const Content = Layout;

class CreateCategories extends Component {

  render() {  

    return (
      <Content style={{width: '83vw',float: 'right',marginRight: '1em'}}>
        <Breadcrumb style={{ margin: '16px', marginLeft: '40px' }}>
          <Breadcrumb.Item>Store</Breadcrumb.Item>
          <Breadcrumb.Item>Create New Category</Breadcrumb.Item>
        </Breadcrumb>
        <div className= "main-container" style={{marginLeft: '40px', background: '#fff', minHeight: '100vh', boxShadow: '0px 2px 20px 3px #b6b6b6', borderRadius: 5, padding: '1em', alignItems: "center" }}>

          <Row>
            <div style={{fontSize: '1.5em'}}><b><u>Create Category</u></b> </div>
            <br/>
            <CategoryForm/>
          </Row>
          <Row style={{textAlign: "center"}}>
          
            <Button htmlType="submit" icon="upload">Save </Button>&nbsp;&nbsp;
            <Button type="primary" icon="upload" htmlType="submit">Save and New</Button> &nbsp;&nbsp;
            <Button type="danger" icon="close" htmlType="submit">Cancel</Button>

          </Row>

        </div>


      </Content>
    )
  }
}

export default CreateCategories;