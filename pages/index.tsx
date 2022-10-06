import type { NextPage } from 'next'
import { Col, Row } from 'antd'

const Home: NextPage = () => {
  return (
    <div>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
      First page
    </div>
  )
}

export default Home

