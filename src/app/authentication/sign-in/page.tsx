'use client'

import { Button, Form, Input, Space } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Page = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form}>
      <Form.Item name="Tên đăng nhập" label="Username/Email" required>
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="Mật khẩu" label="Password" required>
        <Input
          prefix={<LockOutlined />}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" className="form-submit-button">
            Đăng nhập
          </Button>
          Or <a href="">Đăng ký!</a>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default Page