import styles from "../../styles/authentication.module.css"
import { Card, Col, Row } from "antd"

const AuthenticationPagesLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Row justify="center" align="middle" style={{minHeight: '100vh'}}>
        <Col xs={16} xl={6} className="form-container">
          <Card>
            {children}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AuthenticationPagesLayout