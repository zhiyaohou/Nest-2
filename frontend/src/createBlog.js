import './App.css';
import React from 'react';
import { Mentions, Form, Button} from 'antd';


//404

function createBlog() {
  const { Option, getMentions } = Mentions;

  const App = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };

    const id = 0;
    const [blog,setBlog] = React.useState({id:this.blogs.length, content:this.Mentions.value, user:0, publishTime:new Date(), vote:0});/*参数需再次确定*/
    React.useEffect(()=>{
      fetch(`/blog/createBlog`,{
          method:'post',
          headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
      }).then(response => response.json())
      .then(data => {
        console.log(data);
        setBlog(data)

      });
    },[id])
    console.log(blog.content);

    return (
      <div>
         <Form form={form} layout="horizontal" onFinish={onFinish}>
           
          {/* <Form.Item
            name="coders"
            label="Top coders"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            rules={[{ validator: checkMention }]}
          >
            <Mentions rows={1}>
              <Option value="afc163">afc163</Option>
              <Option value="zombieJ">zombieJ</Option>
              <Option value="yesmeck">yesmeck</Option>
            </Mentions>
          </Form.Item> */}
          
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
}
  export default createBlog;