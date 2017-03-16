import React from 'react';

import { Form, Input, Button, Select } from 'antd';
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    this.props.form.setFieldsInitialValue(this.props.initialValues);
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleReset = e => {
    this.props.form.resetFields();
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const descriptionError = isFieldTouched('description') &&
      getFieldError('description');
    const recepiesError = isFieldTouched('recepies') &&
      getFieldError('recepies');
    const tagsError = isFieldTouched('tags') && getFieldError('tags');
    const thumbnailURLError = isFieldTouched('thumbnailURL') &&
      getFieldError('thumbnailURL');
    console.log(this.props.form.getFieldsValue());
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={titleError ? 'error' : ''}
          help={titleError || ''}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input a title!' }],
          })(<Input placeholder="Title" />)}
        </Form.Item>
        <Form.Item
          validateStatus={descriptionError ? 'error' : ''}
          help={descriptionError || ''}
        >
          {getFieldDecorator('description', {
            rules: [
              { required: false, message: 'Please input a description!' },
            ],
          })(<Input placeholder="Description" type="textarea" />)}
        </Form.Item>
        <Form.Item
          validateStatus={recepiesError ? 'error' : ''}
          help={recepiesError || ''}
        >
          {getFieldDecorator('recepies', {
            rules: [{ required: false, message: 'Please input recepies!' }],
          })(
            <Select multiple placeholder="Recepies">
              {this.props.recepies.map(r => (
                <Select.Option key={r.id}>{r.title}</Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          validateStatus={tagsError ? 'error' : ''}
          help={tagsError || ''}
        >
          {getFieldDecorator('tags', {
            rules: [{ required: false, message: 'Please input tags!' }],
          })(<Select tags placeholder="Tags" />)}
        </Form.Item>
        <Form.Item
          validateStatus={thumbnailURLError ? 'error' : ''}
          help={thumbnailURLError || ''}
        >
          {getFieldDecorator('thumbnailURL', {
            rules: [
              { required: false, message: 'Please input a thumbnail URL!' },
            ],
          })(<Input placeholder="Thumbnail URL" type="url" />)}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            {' '} 
            Submit{' '}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleReset}>
            {' '} 
            Reset{' '}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
