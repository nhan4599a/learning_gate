import { Col, Row, Image } from "antd"
import React from "react"
import styles from "@/styles/landing.module.css"


const images = [
  {
    id: 1,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg",
    disablePreview: false
  },
  {
    id: 2,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg",
    disablePreview: false
  },
  {
    id: 3,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg",
    disablePreview: false
  },
  {
    id: 4,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/att.svg",
    disablePreview: false
  },
  {
    id: 5,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg",
    disablePreview: false
  },
  {
    id: 6,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg",
    disablePreview: false
  },
  {
    id: 7,
    src: "https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg",
    disablePreview: false
  }
]
const ClientLogo = () => {
  return (
    <Row className={styles.client}>
      <Col span={6}></Col>
      <Col span={12}>
        <h3>
          Trusted by over 15,000 companies and millions of learners around the
          world
        </h3>
        <div className={styles.clientlogo}>
          {images.map(image => (
            <Image
              key={image.id}
              src={image.src}
              alt={`Client ${image.id}`}
              preview={image.disablePreview}
            />
          ))}
        </div>
      </Col>
      <Col span={6}></Col>
    </Row>
  )
}

export default ClientLogo