import styles from "@/styles/layout.module.css"
import {
  SearchOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
  BellOutlined,
  UserOutlined
} from "@ant-design/icons"
import Link from "next/link"
import { 
  Button,
  Dropdown,
  Input,
  MenuProps,
  Space
} from "antd"
import { useState } from "react"

const username = "Username"
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

const loggedin: MenuProps["items"] = [
  {
    key: "profile",
    label: <a href="/profile">Profile</a>
  },
  {
    key: "changepassword",
    label: <a href="#">Change password</a>
  },
  {
    key: "logout",
    label: <a href="#">Log out</a>
  }
]

const FixedHeader = () => {
  const [ isLoggedIn ] = useState(!false)

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
      <div className={isLoggedIn ? "userprofile" : "headerbtns"}>
        {!isLoggedIn && (
          <div className={styles.headerbtns}>
            <Button type="default" style={{ marginRight: 30 }}>
              <Link href="#">Log in</Link>
            </Button>
            <Button type="primary">
              <Link href="#">Sign up</Link>
            </Button>
          </div>
        )}
        {isLoggedIn && (
          <div className={styles.userprofile}>
            <Dropdown menu={{ items: loggedin }} trigger={ [ "click" ] } placement="bottom" arrow={{pointAtCenter: true}}>
              <p>
                <UserOutlined className={styles.usericon}/>
                {username}
              </p>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  )
}

export default FixedHeader