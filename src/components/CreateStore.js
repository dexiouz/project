import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Button } from "antd";
import StoreInfor from './StoreInfor';
import StoreAddress from './StoreAddress';
import StoreOtherInfor from './StoreOtherInfor';
import '../styles/Styles.css';


const Content = Layout;

class CreateStore extends Component {
  
  render() {
   

    return (
      <Content style={{width: '83vw',float: 'right',marginRight: '1em'}}>
        <Breadcrumb style={{ margin: '16px', marginLeft: '40px' }}>
          <Breadcrumb.Item>Store</Breadcrumb.Item>
          <Breadcrumb.Item>Create New Store</Breadcrumb.Item>
        </Breadcrumb>
        <div className= "main-container" style={{marginLeft: '40px', background: '#fff', minHeight: '100vh', boxShadow: '0px 2px 20px 3px #b6b6b6', borderRadius: 5, padding: '1em', alignItems: "center" }}>

          <Row>
            <div style={{fontSize: '1.5em'}}><b><u>Store Information</u></b> </div>
            <br/>
              <StoreInfor/>

            <div style={{fontSize: '1.5em'}}><b><u>Address Information</u></b> </div>
            <br/><br/>
            <StoreAddress/>

            <div style={{fontSize: '1.5em'}}><b><u>Other Information</u></b> </div>
            <br/>
            <StoreOtherInfor/>
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

export default CreateStore;