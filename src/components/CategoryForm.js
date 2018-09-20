import React, { Component } from "react";
import { Form, Input } from "antd";
import '../styles/Styles.css';
const FormItem = Form.Item;

class CategoryForm extends Component {
  
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

        <FormItem {...formItemLayout} label="Category Name">
          <Input className="input-alignment"/>
        </FormItem>

      </Form>
    )
  }
}

export default CategoryForm;