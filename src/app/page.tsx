"use client"

import ClientLogo from "@/components/homepage/ClientLogo"
import HomepageBanner from "@/components/homepage/HomepageBanner"
import CourseTab from "@/components/homepage/CourseTab"
import styles from "@/styles/landing.module.css"
import { Row } from "antd"
import Topics from "@/components/homepage/Topics"
import TeachBanner from "@/components/homepage/TeachBanner"
// import Feedback from "@/components/homepage/Feedback"
// import CourseVideo from "@/components/homepage/CourseVideo"
// import VideoList from "@/components/homepage/VideoList"
// import CourseCard from "@/components/homepage/CourseCard"

const HomePage = () => {
  return (
    <Row className={styles.container}>
      <HomepageBanner />
      <ClientLogo />
      <CourseTab />
      {/* <Feedback /> */}
      <Topics />
      {/* <CourseVideo /> */}
      <TeachBanner />
    </Row>
  )
}

export default HomePage
