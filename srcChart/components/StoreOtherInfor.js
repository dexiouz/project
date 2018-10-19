import React, { Component } from "react";
import {  Form, Input, Select } from "antd";
import '../styles/Styles.css';
const FormItem = Form.Item;
const Option = Select.Option;

class StoreOtherInfor extends Component {
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

        <FormItem {...formItemLayout} label="Outlet Type">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Number of Coolers">
          <Input className="input-alignment"/>
        </FormItem>
        
        <FormItem {...formItemLayout} label="Cooler Types">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Electricity">
        <Select
            className="input-alignment"
            placeholder="Electricity"
            onChange={this.handleSelectChange}
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </FormItem>

        <FormItem {...formItemLayout} label="Categories Handled">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Source of Purchase">
          <Select
            className="input-alignment"
            placeholder="Source of Purchase"
            onChange={this.handleSelectChange}
          >
            <Option value="Distributor">Distributor</Option>
            <Option value="MainMarket">Main Market</Option>
            <Option value="Neighbourhood">Neighbourhood</Option>
          </Select>
        </FormItem>

        <FormItem {...formItemLayout} label="Selling Activity">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Service Type">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Building Structure">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Selling Area Size">
          <Input className="input-alignment"/>
        </FormItem>

        <FormItem {...formItemLayout} label="Days Opened">
        <Select
            className="input-alignment"
            placeholder="Days of the week opened"
            onChange={this.handleSelectChange}
          >
            <Option value="1-Days">1 Day</Option>
            <Option value="2-Days">2 Days</Option>
            <Option value="3-Days">3 Days</Option>
            <Option value="4-Days">4 Days</Option>
            <Option value="5-Days">5 Days</Option>
            <Option value="6-Days">6 Days</Option>
            <Option value="7-Days">7 Days</Option>
          </Select>
        </FormItem>

        <FormItem {...formItemLayout} label="Language Spoken">
          <Input className="input-alignment" />
        </FormItem>

        <FormItem {...formItemLayout} label="Week Days Opened">
          <Input className="input-alignment"/>
        </FormItem>

      </Form>
    )
  }
}

export default StoreOtherInfor;