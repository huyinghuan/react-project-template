import { FC } from 'react';

import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

import { useLocation, useNavigate } from "react-router-dom"

import "./index.css"
interface NormalLoginFormProps {
  onFinish: (values: any) => void
}
const NormalLoginForm: FC<NormalLoginFormProps> = (props: NormalLoginFormProps) => {
  return (
    <Form onFinish={props.onFinish}
    >
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名" autoComplete="username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder="密码" autoComplete="current-password" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  );
}
const LoginPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getBackURL = () => {
    const { search } = location
    const redirect = new URLSearchParams(search).get("redirect")
    if (redirect) {
      window.location.href = redirect
      return
    }
    navigate("/")
  }
  const onFinish = (form: { name: string, password: string }) => {
    // GetData('/user-status', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(values)
    // }).then((resp) => {
    //   let backUrl = "/home/appList"
    //   let shouldBack = this.getBackURL()
    //   if(shouldBack){
    //     backUrl = shouldBack
    //   }
    //   this.props.history.push(backUrl)
    // }).catch((e)=>{console.log(e)})
  };
  return (
    <div className="page-login">
      <Row>
        <Col span={10}></Col>
        <Col span={4}>
          <NormalLoginForm onFinish={(values) => { onFinish(values) }} />
        </Col>
        <Col span={10}></Col>
      </Row>
    </div>

  )
}
