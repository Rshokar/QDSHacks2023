import { Row, Col } from 'antd';

import StatCard from '../../components/StatCard';
import StatusPie from '../../components/StatusPie';
import StatusBar from '../../components/StatusBar';
import OverviewBar from '../../components/OverviewBar';
import RouteCard from '../../components/RouteCard';
import FilterDropdown from '../../components/FilterDropdown';

import { Container } from './styled';

const Analytics = () => {
    return (
        <Container>
            <Row gutter={16}>
                <Col span={9}>Day Filter</Col>
                <Col span={3} className="date">
                    <div class="month">DEC</div>
                    <div class="day">1</div>
                </Col>
                <Col span={12}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <StatCard
                                title="efficiency"
                                value="21"
                                unit="t / L" />
                        </Col>
                        <Col span={6}>
                            <StatCard
                                title="time per round"
                                value="22"
                                unit="hours" />
                        </Col>
                        <Col span={6}>
                            <StatCard
                                title="load per round"
                                value="23"
                                unit="tonnes" />
                        </Col>
                        <Col span={6}>
                            <StatCard
                                title="fuel rate"
                                value="100"
                                unit="L / hr" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12} className="filter-group">
                    {/* <FilterDropdown text="Filter by Truck" />
                    <FilterDropdown text="Truck ID" /> */}
                </Col>
                <Col span={12}>
                    <OverviewBar/>
                </Col>
            </Row>

            <Row className="main-content" gutter={16}>
                <Col span={12} className="sunburst">
                    <div className="title">
                        <h1>Status Per Round</h1>
                    </div>
                    <StatusPie/>
                </Col>

                <Col span={12} gutter={16} className="main-right">
                    <StatusBar className="upper"/>

                    <Row gutter={16} className="lower">
                        <Col span={12}>
                            <RouteCard />
                        </Col>
                        <Col span={12}>
                            <RouteCard />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Analytics;