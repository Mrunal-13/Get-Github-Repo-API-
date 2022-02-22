
import React, { useEffect } from "react";
import "./App.js";
import "./App.css";
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';


const Forms = (props) => {

    return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={props.onFinish} 
          onFinishFailed={props.onFinishFailed}
          
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="enter username on github" />
          </Form.Item>
          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forms;