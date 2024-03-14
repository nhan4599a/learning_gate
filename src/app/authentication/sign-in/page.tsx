'use client'

import { Button, Form, Input, Checkbox, Divider } from 'antd'
import { LockOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons'
import styles from '../../../styles/authentication.module.css'
import FormItem from 'antd/es/form/FormItem'
import Link from 'next/link'

const Page = () => {
  const [ form ] = Form.useForm()

  return (
    <Form form={form} className="login-form">
      <h2>Log in to your account</h2>
      <Form.Item name="Tên đăng nhập" label="Username" required>
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="Mật khẩu" label="Password" required>
        <Input prefix={<LockOutlined />} type="password" />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className={styles.forgot} href="/authentication/forgot-password">
          Forgot Password?
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Log in
        </Button>
        Don't have an account?
        <Link href="/authentication/sign-up"> Sign up</Link>
      </Form.Item>
      <Divider />
      <FormItem>
        <Button block>
          <GoogleOutlined /> Log in with Google account
        </Button>
      </FormItem>
    </Form>
  )
}

export default Page
