import React, { Component } from "react";
import {  Form, Input, DatePicker } from "antd";
import '../styles/Styles.css';
const FormItem = Form.Item;

class ProductList extends Component {
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

        <FormItem {...formItemLayout} label="Stock 1">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Stock 2">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Opening">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Purchases">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Stock 1">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Stock 2">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Closing Stock">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Sales Unit">
          <Input className="input-alignment"/>
        </FormItem>
        
      </Form>
    )
  }
}

export default ProductList;