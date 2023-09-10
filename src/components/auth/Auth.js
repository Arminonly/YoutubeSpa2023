import { Space, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';
import authLogo from '../../img/auth/auth-logo.png';

const Auth = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div style={{margin:'0px auto', background:'inherit'}}>
      <Space
        direction="vertical"
        style={{
          width: '510px',
          height: '520px',
          margin:'0px auto',
          paddingTop:'30px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            background: '#FFFFFF',
            padding: '40px 0px',
          }}
        >
          <img
            style={{
              width: '88px',
              height: '88px'
            }}
            src={authLogo}
            alt="authLogo"
          />

          <div
            style={{
              fontFamily: 'var(--fontFamily)',
              fontSize: 'var(--fontSize)',
              fontWeight: 'bolder',
              lineHeight: 'var(--lineHeight)',
              marginTop: '30px'
            }}
          >
            <h3>Вход</h3>
          </div>
          <Space
            direction="vertical"
            style={{
              marginTop: '30px'
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Login!'
                  }
                ]}
              >
                <Input
                  style={{
                    width: '334px'
                  }}
                  prefix={<FaUserTie className="site-form-item-icon" />}
                  placeholder="login"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!'
                  }
                ]}
                hasFeedback
              >
                <Input.Password
                  style={
                    {
                      width: '334px',
                    }
                  }
                  prefix={<BsShieldLockFill className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    width: '176px',
                    height: '52px',
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    lineHeight: '24px',
                    textAlign: 'center'
                  }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  <Link to="/main">Войти</Link>
                </Button>{' '}
                &nbsp;&nbsp; Or <Link to="/registry">register now!</Link>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default Auth;
