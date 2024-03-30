import { Card, Typography, Image, Badge } from 'antd'
import styles from "@/styles/landing.module.css"
// import CourseCard from './CourseCard'
import { useState } from 'react'

const CourseVideo = ({title, rating, price, imageUrl  }: any) => {
  const [  , setHovered ] = useState(false)
    return (
      <Card
      className={styles.cards}
      hoverable={true}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      cover={<Image src={imageUrl} alt={title} preview={false} />}
    >
      <Card.Meta
        title={
          <Typography.Title level={5} className={styles.cardtitle}>
            {title}
          </Typography.Title>
        }
      />
      {(Boolean(rating)) && <Badge.Ribbon  text={`${rating} Stars`} />}
      <p>{price}.000đ</p>
    </Card>
    )
}

export default CourseVideo