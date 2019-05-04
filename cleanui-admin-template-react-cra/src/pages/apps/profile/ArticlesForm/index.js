import React from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

@Form.create()
class ArticlesForm extends React.Component {
  state = {}

  render() {
    const { form } = this.props

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h5 className="text-black mt-4">
          <strong>Favorite Articles</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <FormItem label="Title">
              {form.getFieldDecorator('title', {
                rules: [{required: false}],
              })(<Input placeholder="Title" />)}
            </FormItem>
          </div>
          <div className="col-lg-6">
            <FormItem label="URL">
              {form.getFieldDecorator('url', {
                rules: [{required: false}],
              })(<Input placeholder="URL" />)}
            </FormItem>
          </div>
        </div>
        <div>
          <div className="col-lg-16">
            <FormItem label="Description">
              {form.getFieldDecorator('description', {
                rules: [{required: false}],
              })(<Input placeholder="Description" />)}
            </FormItem>
          </div>
        </div>
        <div className="form-actions">
          <Button style={{width: 150}} type="primary" htmlType="submit" className="mr-3">
            Submit
          </Button>
          <Button htmlType="submit">Cancel</Button>
        </div>
      </Form>
    )
  }
}

export default ArticlesForm
