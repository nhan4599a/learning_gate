"use client"

import { Layout} from "antd"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import styles from "@/styles/layout.module.css"
import FixedHeader from "@/components/Header"
import FixedFooter from "@/components/Footer"
const { Header, Content, Footer } = Layout

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AntdRegistry>
          <Header className={styles.header}>
            <FixedHeader />
          </Header>
          <Content className={styles.content}>{children}</Content>
          <Footer className={styles.footer}>
            <FixedFooter />
          </Footer>
        </AntdRegistry>
      </body>
    </html>
  )
}

export default RootLayout
