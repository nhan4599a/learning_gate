import Link from "next/link"
import styles from "@/styles/landing.module.css"
import { Button } from "antd"

const Topics = () => {
  return (
    <>
      <div className={styles.topicsection}>
        <h2>Featured topics by category</h2>
        <div className={styles.topics}>
          <div className={styles.topicscol}>
            <h3>Development</h3>
            <div>
              <div className={styles.trendingtopics}>
                <Link href="#">Python </Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">Web development</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">Machine Learning</Link>
              </div>
            </div>
          </div>
          <div className={styles.topicscol}>
            <h3>Business</h3>
            <div>
              <div className={styles.trendingtopics}>
                <Link href="#">Financial Analysis</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">SQL</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">PMP</Link>
              </div>
            </div>
          </div>
          <div className={styles.topicscol}>
            <h3>IT and Software</h3>
            <div>
              <div className={styles.trendingtopics}>
                <Link href="#">Amazon AWS</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">Ethical Hacking</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">Cyber Security</Link>
              </div>
            </div>
          </div>
          <div className={styles.topicscol}>
            <h3>Design</h3>
            <div>
              <div className={styles.trendingtopics}>
                <Link href="#">Photoshop</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">Graphic Design</Link>
              </div>
              <div className={styles.trendingtopics}>
                <Link href="#">Drawing</Link>
              </div>
            </div>
          </div>
          <Button className="" type="primary" href="#">
            Explore more topics
          </Button>
        </div>
      </div>
    </>
  )
}

export default Topics