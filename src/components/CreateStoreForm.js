/*-------------------------------------------------*
* Name: Chibuike Vincent                           *
* Created At: 31st august, 2018                    *
* Updated At: 10th Sept 2018                       *
* Updated By: Favor George                         *
*--------------------------------------------------*/

import React from 'react'
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const FormItem = Form.Item;

export default class LocationAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div>
      <div id = 'firstform'>

        <Form layout={formLayout}>

          <FormItem className = 'formitem'
            label="Store Name"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem className = 'formitem'
            label="Owner Name"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="Address"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="Physical Address"
            {...formItemLayout}
          >
            <TextArea placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="Community"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="City"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="Latitude"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="Longitude"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem className = 'formitem'
            label="Phone Number"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>

          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
        </div>
      </div>
    );
  }
}











