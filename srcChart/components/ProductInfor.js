import React, { Component } from "react";
import {  Form, Input, DatePicker } from "antd";
import '../styles/Styles.css';
const FormItem = Form.Item;

class Storeinfor extends Component {
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

        <FormItem {...formItemLayout} label="Product Code">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Product Name">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Product Weight">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Weight Type">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Bar-code">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Category Name">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Manufacturer">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Brand Name">
          <Input className="input-alignment"/>
        </FormItem>
        
      </Form>
    )
  }
}

export default Storeinfor;