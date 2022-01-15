import './App.css';
import React from 'react';
import { Mentions, Form, Button } from 'antd';


function CreateBlog() {
  const { Option } = Mentions;

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
      fetch(`/blog/createBlog`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: values })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

        });
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };

  return (
    <div>
      <Form form={form} layout="horizontal" onFinish={onFinish}>

        <Form.Item
          name="bio"
          label="Bio"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          rules={[{ required: true }]}
        >
          <Mentions rows={3} placeholder="You can use @ to ref user here">
            <Option value="afc163">afc163</Option>
            <Option value="zombieJ">zombieJ</Option>
            <Option value="yesmeck">yesmeck</Option>
          </Mentions>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateBlog;