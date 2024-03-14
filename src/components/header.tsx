import styles from "@/styles/layout.module.css"
import {
  SearchOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
  BellOutlined
} from "@ant-design/icons"
import Link from "next/link"
import { Button, Dropdown, Input, MenuProps, Space } from "antd"

const categories: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="#">1st menu item</a>
  },
  {
    key: "2",
    label: <a href="#">2nd menu item</a>
  },
  {
    key: "3",
    label: <a href="#">3rd menu item</a>
  }
]

const notifiations: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="#">1st noti</a>
  },
  {
    key: "2",
    label: <a href="#">2nd noti </a>
  },
  {
    key: "3",
    label: <a href="#">3rd menu item</a>
  }
]

const cart: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="#">1st item</a>
  },
  {
    type: "divider"
  },
  {
    key: "2",
    label: <Button type="primary">Checkout</Button>
  }
]

const FixedHeader = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navlogo}>Logo</div>
      <div className={styles.navoptions}>
        <Dropdown
          menu={{ items: categories }}
          placement="bottomLeft"
          arrow={{ pointAtCenter: true }}
        >
          <Space>
            Categories <CaretDownOutlined />
          </Space>
        </Dropdown>
      </div>
      <div className={styles.navsearch}>
        <Input
          placeholder="Search for anything..."
          prefix={<SearchOutlined />}
        />
      </div>
      <div className={styles.navcart}>
        <Dropdown
          menu={{ items: cart }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Space>
            <ShoppingCartOutlined />
          </Space>
        </Dropdown>
      </div>
      <div className={styles.navnoti}>
        <Dropdown
          menu={{ items: notifiations }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Space>
            <BellOutlined />
          </Space>
        </Dropdown>
      </div>
      <div className={styles.navbtns}>
        <Button type="default" style={{ marginRight: 30 }}>
          <Link href="#"></Link>
          Log in
        </Button>
        <Button type="primary">
          <Link href="#"></Link>
          Sign up
        </Button>
      </div>
    </div>
  )
}

export default FixedHeader
