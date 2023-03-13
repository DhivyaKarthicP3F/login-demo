import React, { useState } from 'react';
import { Button, Checkbox, Col, Layout, FloatButton, Form, Row, Typography, Input, Space } from 'antd';
import logo from './assets/logo.png';
import image from './assets/image.png';
import { MessageOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;


const Login = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        // marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '80%'
        <div style={{ top: '0', bottom: '0', left: '0', right: '0', position: 'fixed', minHeight: '100vh', overflow: 'auto', height: '100vh' }}>
            <Row style={{ top: '0', left: '0', right: '0', height: '90vh' }}>
                    <Col style={{ width: '50%', height: '100%', background: '#fafafa' }}>
                        <img src={logo} height={50} width={200} style={{ padding: '10px' }} />
                        <Typography style={{ color: '#030303', textAlign: 'center', fontSize: '26px', padding: '10px' }}>WELCOME BACK</Typography>
                        <Typography style={{ color: '#636364', textAlign: 'center' }}>Please enter your details</Typography>
                        <div style={{ padding: '10px 10px', marginLeft: '25%', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
                            <Form
                                name="basic"
                                form={form}
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: '100%',
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                layout='vertical'
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please provide your email!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please provide your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Row>
                                    <Col span={8}>
                                        <Form.Item
                                            name="remember"
                                            valuePropName="checked"
                                            wrapperCol={{
                                                span: 32,
                                            }}
                                        >
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8} offset={2}>
                                        <Form.Item>
                                            <Button type='link'> Forgot password </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit" style={{ width: '100%', background: '#0b1838', marginTop: '10px', marginBottom: '10px' }}>
                                        Get Started
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <Typography style={{ textAlign: 'center' }}>
                            <Paragraph>
                                Don't have an account? <Link>Signup</Link>
                            </Paragraph>
                        </Typography>
                    </Col>
                    <Col style={{ width: '50%', height: '100%', background: '#ffffff' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '75%', marginTop: '10px' }}>
                            <img src={image} />
                        </div>
                    </Col>
                
                <Col style={{ width: '100%' }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#d9d9d9',
                            height: "80px",
                        }}>
                            <Typography>
                                <Paragraph>
                                    Have any questions? Call us at 9100000000 or Send Email to customersupport@p3fusion.com
                                </Paragraph>
                            </Typography>
                            <FloatButton icon={<MessageOutlined />} type="primary" style={{ bottom: 60, right: 25 }} onClick={() => console.log('click')} />
                        </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;