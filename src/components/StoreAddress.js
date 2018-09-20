import React, { Component } from "react";
import {  Form, Input, Upload, Button, Icon } from "antd";
import '../styles/Styles.css';
const FormItem = Form.Item;

class StoreAddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }

  render() {
    

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    
    
    
    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem {...formItemLayout} label="Address">
          <textarea className="textAreaInput" />
        </FormItem>

        <FormItem {...formItemLayout} label="Community">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="City">
          <Input className="input-alignment"/>
        </FormItem>
        
        <FormItem {...formItemLayout} label="State">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Zip-code">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Country">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Map Loaction">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Physical Location">
          <Upload className="input-alignment" name="logo" action="/upload.do" listType="picture">
            <Button>
              <Icon type="upload" /> Click to select photo
            </Button>
          </Upload>
        </FormItem>

      </Form>
    )
  }
}

export default StoreAddress;