import { Col, Row, Image, Button } from "antd"
import React from "react"
import styles from "@/styles/landing.module.css"

const HomepageBanner = () => {
  return (
    <Row>
      <Col span={12}>
        <Image
          className={styles.banner}
          src="https://elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png"
          alt="App Banner"
          preview={false}
        />
      </Col>
      <Col span={2}></Col>
      <Col span={8}>
        <h1>Learning Gate</h1>
        <p>Learning comes to you</p>
        <Button type="primary">Get Started</Button>
      </Col>
    </Row>
  )
}

export default HomepageBanner