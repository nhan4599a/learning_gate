import React from "react"
import styles from "@/styles/landing.module.css"
import { Button } from "antd"

const TeachBanner = () => {
  return (
    <div className={styles.teachingbannercontainer}>
      <div className={styles.teachingbanner}>
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          alt=""
        />
        <div className={styles.teachingbannercontent}>
          <h2>Become an instructor</h2>
          <div className={styles.textmd}>
            Instructors from around the world teach millions of learners on
            Udemy. We provide the tools and skills to teach what you love.
          </div>
          <div>
            <Button type="primary" href="#">
              Start teaching now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachBanner