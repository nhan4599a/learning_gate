import { Button, Tabs } from 'antd'
import styles from '@/styles/landing.module.css'
import TabPane from 'antd/es/tabs/TabPane'
import CourseCard from './CourseCard'

interface Course {
  id: number
  title: string
  description: string
  rating: number
  price: number
  imageUrl: string
  category: string
}
const courseCategories = [
  'Python', 
  'Excel', 
  'Web Development', 
  'JavaScript'
]
const coursesData: Course[] = [
  {
    id: 1,
    title: 'The Complete Python Bootcamp From Zero to Hero',
    description: 'Become an Python pro',
    rating: 4.6,
    price: 1399,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
    category: 'Python'
  },
  {
    id: 1,
    title: 'The Complete Python Bootcamp From Zero to Hero',
    description: 'Become an Python pro',
    rating: 4.6,
    price: 1399,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
    category: 'Python'
  },
  {
    id: 1,
    title: 'The Complete Python Bootcamp From Zero to Hero',
    description: 'Become an Python pro',
    rating: 4.6,
    price: 1399,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
    category: 'Python'
  },
  {
    id: 1,
    title: 'The Complete Python Bootcamp From Zero to Hero',
    description: 'Become an Python pro',
    rating: 4.6,
    price: 1399,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
    category: 'Python'
  },
  {
    id: 1,
    title: 'The Complete Python Bootcamp From Zero to Hero',
    description: 'Become an Python pro',
    rating: 4.6,
    price: 1399,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
    category: 'Python'
  },
  {
    id: 1,
    title: 'The Complete Python Bootcamp From Zero to Hero',
    description: 'Become an Python pro',
    rating: 4.6,
    price: 1.399,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
    category: 'Python'
  },
  {
    id: 2,
    title: 'Excel Mastery for Data Analysis',
    description: 'Become an Excel pro',
    rating: 4.8,
    price: 999,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg',
    category: 'Excel'
  },
  {
    id: 2,
    title: 'The Complete 2024 Web Development Bootcamp',
    description: 'Become an Web Developer pro',
    rating: 4.8,
    price: 999,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    description: 'Become an Javascript pro',
    rating: 4.8,
    price: 999,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg',
    category: 'JavaScript'
  },
  {
    id: 4,
    title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2024',
    description: 'Become an JavaScript pro',
    rating: 4.8,
    price: 999,
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg',
    category: 'JavaScript'
  }
]

const CourseTab = () => {
  const coursesByCategory = coursesData.reduce((acc, course: Course) => {
    if (
      course.category.length > 0) {
      acc[course.category] = (Boolean(acc[course.category])) || []
      acc[course.category].push(course)
    }
    return acc
  }, {})

  return (
    <div className={styles.coursetabcontainer}>
      <h2>A broad selection of courses</h2>
      <Tabs defaultActiveKey="1" className={styles.coursetab}>
        {courseCategories.map(category => (
          <TabPane tab={category} key={category} className={styles.category}>
            <p>{category} description</p>
            <Button href="#">Explore {category}</Button>
            <div className={styles.cardscontainer}>
              {(Boolean(coursesByCategory[category])) &&
                coursesByCategory[category].map(course => (
                  <CourseCard key={course.id} {...course} />
                ))}
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default CourseTab