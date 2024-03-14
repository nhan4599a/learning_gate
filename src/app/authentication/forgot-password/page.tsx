'use client'

import { Button, Form, Input, Divider } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'
import Link from 'next/link'

const Page = () => {
  const [ form ] = Form.useForm()

  return (
    <Form form={form}>
      <h1>Forgot Password</h1>
      <Form.Item name="Email" label="Email" required>
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Reset password
        </Button>
      </Form.Item>
      <Divider />
      <FormItem>
        Or
        <Link href="/authentication/sign-in"> Log in</Link>
      </FormItem>
    </Form>
  )
}

export default Page
