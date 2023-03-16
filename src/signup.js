import React, { useState } from 'react';
import { Button, Col, Layout, FloatButton, Form, Row, Typography, Input } from 'antd';
import logo from './assets/logo.png';
import image from './assets/image.png';
import { MessageOutlined } from '@ant-design/icons';
import { Auth } from 'aws-amplify';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;


const Signup = () => {

    const [form] = Form.useForm();
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    async function signUp(values) {
        try {
            const { user } = await Auth.signUp({
                username: values.email,
                password: values.password,
                attributes: {
                    email: values.email,          // optional
                    company_name: values.companyName 
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }

    }


    const onFinish = (values) => {

        console.log('Success:', values);
        signUp(values);

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        // marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '80%'
        <>
            <Row >
                <Col style={{ width: '50%', height: '100%', background: '#fafafa' }}>
                    <img src={logo} height={50} width={200} style={{ padding: '10px' }} />
                    <Typography style={{ color: '#030303', textAlign: 'center', fontSize: '26px', padding: '10px' }}> CREATE A P3FUSION ACCOUNT </Typography>
                    <Typography style={{ color: '#636364', textAlign: 'center' }}>Please enter your details</Typography>
                    <div style={{ padding: '10px 10px', marginLeft: '25%', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
                        <Form
                            form={form}
                            name="basic"
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
                                label="Company name"
                                name="companyName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please provide your company name!',
                                    },
                                ]}

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please provide your password!',
                                    },
                                    {
                                        validator: (_, value) => {
                                            if (strongRegex.test(value)) {
                                                return Promise.resolve();
                                            } else if (mediumRegex.test(value)) {
                                                return Promise.reject('Password strength : fair');
                                            }
                                            else {
                                                return Promise.reject('Password strength is weak. Include aphabets/numbers/special characters');
                                            }
                                        }
                                    }
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: '100%', background: '#0b1838', marginTop: '10px', marginBottom: '10px' }}>
                                    Create Account
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Typography style={{ textAlign: 'center' }}>
                        <Paragraph>
                            By selecting create account you agree to our <Link>Terms</Link> and have read and understand our <Link>privacy policy statement</Link>.
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
        </>
    );
}

export default Signup;