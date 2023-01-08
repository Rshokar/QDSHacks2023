import { testData } from './test';

import { Col, Row } from 'antd';

import { StyledCard } from './styled';


const OverviewBar= ({data}) => {
        
    const renderSections = (data) => data.map((d) => {
        return (
            <Col span={6} className="section">
                <div className="value">{d.value} {d.unit}</div>
                <div className="label">{d.label}</div>
            </Col>
        );
    });
    
    return (
        <StyledCard>
            <Row gutter={16}>
                {renderSections(data || testData)}
            </Row>
        </StyledCard>
    );
}

export default OverviewBar;