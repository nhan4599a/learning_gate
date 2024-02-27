import styles from '../../styles/authentication.module.css'
import { Card, Col, Row } from 'antd'

const AuthenticationPagesLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={8} offset={8} className='form-container'>
          <Card>
            {children}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AuthenticationPagesLayout