import React from "react"
import styles from "@/styles/videolist.module.css"

interface VideoItemProps {
  title: string;
  description: string;
  thumbnailUrl?: string;
}

// const items: VideoItemProps[] = [
//   {
//     title: "Introduction to React",
//     description: "Learn the fundamentals of React.js",
//     thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
//   },
//   {
//     title: "Advanced React and GraphQL",
//     description: "",
//     thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
//   }
// ]

const VideoItem = ({ title, description, thumbnailUrl }: VideoItemProps) => {
  return (
    <div className={styles.videoitem}>
      <img src={thumbnailUrl} alt={title} width={100} height={80}></img>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoItem