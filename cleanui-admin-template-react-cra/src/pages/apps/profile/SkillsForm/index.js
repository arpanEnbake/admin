import React from 'react'
import { Form, Button, Select } from 'antd'

const FormItem = Form.Item

@Form.create()
class SkillsForm extends React.Component {
  state = {}

  render() {
    const { form } = this.props

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="card">
          <div className="card-body">
            <h5 className="mb-3 text-black">
              <strong>Skills</strong>
            </h5>
            <FormItem label="Category">
              {form.getFieldDecorator('category', {
                initialValue: ['python', 'serverless'],
              })(
                <Select
                  mode="tags"
                  size="default"
                  placeholder="Select post category"
                  style={{ width: '100%' }}
                />,
              )}
            </FormItem>
            <div className="form-actions">
              <Button style={{width: 150}} type="primary" htmlType="submit" className="mr-3">
                Submit
              </Button>
              <Button htmlType="submit">Cancel</Button>
            </div>
          </div>
        </div>
      </Form>
    )
  }
}

export default SkillsForm
