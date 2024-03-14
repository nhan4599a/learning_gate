'use client'

import { Button, Form, Input, Checkbox, Divider } from 'antd'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'
import Link from 'next/link'

const Page = () => {
  const [ form ] = Form.useForm()

  return (
    <Form form={form} className="signup-form">
      <h1>Sign up and start learning</h1>
      <Form.Item name="Tên đăng nhập" label="Username" required>
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="Email" label="Email" required>
        <Input prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item name="Mật khẩu" label="Password" required>
        <Input prefix={<LockOutlined />} type="password" />
      </Form.Item>

      <Form.Item>
        <Form.Item name="subscribe" valuePropName="checked" noStyle>
          <Checkbox>Send me special offers and learning tips.</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Sign up
        </Button>
      </Form.Item>
      <Divider />
      <FormItem>
        Already have an account?
        <Link href="/authentication/sign-in"> Log in</Link>
      </FormItem>
    </Form>
  )
}

export default Page
