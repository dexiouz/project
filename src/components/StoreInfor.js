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

        <FormItem {...formItemLayout} label="Store Code">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Store Name">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Store Owner">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="E-mail">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Phone number">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="WhatsApp Phone">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Year Opened">
          <DatePicker className="input-alignment" style={{ width: "100%"}}/>
        </FormItem>

      </Form>
    )
  }
}

export default Storeinfor;