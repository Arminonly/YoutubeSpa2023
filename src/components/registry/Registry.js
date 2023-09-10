import { Link } from 'react-router-dom';

import {
  Form,
  Input,
  Select,
  Layout,
  Space,
  Typography,
  Row,
  Col,
  InputNumber,
  Button,
  message
} from 'antd';

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  borderRadius: 15,
  border: '2px solid lime'
};
export const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const Registry = () => {
  const onFinish = async (values) => {
    let url = 'https://todo-redev.herokuapp.com/api/users/register';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    const data = await res.json();
    if (!data.id) {
      setTimeout(() => {
        message.error(
          'Что то пошло не так((( Возможно такое имя или email уже существуют. Попытайтесь снова)))',
          5
        );
      }, 800);
    } else {
      setTimeout(() => {
        message.success(
          'Регистрация прошла успешно!!! Пожалуйста, перейдите на страницу с логином',
          5
        );
      }, 800);
    }
  };

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        marginTop:'40px',
        backgroundColor: 'white',
      }}
      size={[0, 48]}
    >
      <Layout.Content style={contentStyle}>
        <Typography.Title level={3}>
          Пожалуйста, зарегистрируйтесь!!!
        </Typography.Title>
        <Row wrap={false}>
          <Col flex="auto">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              style={{
                maxWidth: '75%'
              }}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="Username"
                tooltip="Как Вы хотите, чтобы другие Вас называли?"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                    whitespace: true
                  }
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                    whitespace: true
                  }
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    min: 8,
                    whitespace: true
                  }
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender!'
                  }
                ]}
              >
                <Select placeholder="select your gender">
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <InputNumber
                  style={{
                    width: '100%'
                  }}
                />
              </Form.Item>


              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginBottom: 12, width: '45%', marginRight: '5%' }}
                >
                  Register
                </Button>
                <Button
                  danger
                  htmlType="button"
                  onClick={onReset}
                  style={{ marginBottom: 12, width: '45%', marginLeft: '5%' }}
                >
                  Reset
                </Button>
                <Button type="text" block>
                  <Typography.Text strong underline="true">
                    Вернуться на страницу &nbsp;<Link to="/">Log in</Link>
                  </Typography.Text>
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Space>
  );
};

export default Registry;
