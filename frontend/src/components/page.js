import { Row, Col } from 'antd';

const Page = () => {
  return (
    <Row gutter={16}>
      <Col span={2}>Column 1</Col>
      <Col span={6}>Column 2</Col>
      <Col span={12}>Column 3</Col>
    </Row>
  );
};