import { useState, useEffect } from 'react';

import Icon, { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

import dayjs from 'dayjs';
import moment from 'moment';

import { ReactComponent as Filter } from '../../assets/filter.svg';
import { ReactComponent as Truck } from '../../assets/truck.svg';

import TiltedButton from '../../components/TiltedButton';
import StatCard from '../../components/StatCard';
import StatusPie from '../../components/StatusPie';
import StatusBar from '../../components/StatusBar';
import HorizontalBar from '../../components/HorizontalBar';
import OverviewBar from '../../components/OverviewBar';
import RouteCard from '../../components/RouteCard';
import FilterDropdown from '../../components/FilterDropdown';

import { Container } from './styled';
import { filterOpts, kpi, truckIDs, testData } from './constants';

const Analytics = () => {
    const [dateFilter, setDateFilter] = useState('');
    const [filter, setFilter] = useState(filterOpts[0]);
    const [id, setId] = useState(1);
    const [date, setDate] = useState(null);
    const [globalData, setGlobalData] = useState(null);
    const [localData, setLocalData] = useState(null);

    useEffect(() => {
        setDate(dateFilter ? dayjs(dateFilter) : null);
    }, [dateFilter]);

    useEffect(() => {
    }, [filter, dateFilter]);

    const renderGlobalStats = (data) => data.map((d) => {
        return (
            <Col span={6}>
                <StatCard
                    title={d.label}
                    value={d.value}
                    unit={kpi[d.label]["unitLong"] || kpi[d.label]["unit"]}
                    icon={kpi[d.label]["icon"]}/>
            </Col>
        );
    });

    return (
        <Container>
            <Row gutter={16}>
                <Col span={9}>
                    <TiltedButton onClick={(d) => setDateFilter(d)} />
                </Col>

                <Col span={3} className="date-wrapper">
                    {date && dateFilter &&
                        <div className="date">
                            <div class="month">{moment(dateFilter, "YYYY-MM-DD").format("MMM")}</div>
                            <div class="day">{date.get("date")}</div>
                        </div>
                    }
                </Col>
                
                <Col span={12}>
                    <Row gutter={16}>
                        {renderGlobalStats(globalData || testData.kpi)}
                    </Row>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12} className="filter-group">
                    <FilterDropdown
                        text="Filter by"
                        options={filterOpts}
                        onSelectionChanged={(s) => setFilter(s)}
                        icon={<Icon component={Filter} />}
                    />
                    {filter === filterOpts[0]
                        ? <FilterDropdown text="Truck ID" options={truckIDs} icon={<Icon component={Truck}/>}/>
                        : <FilterDropdown text="Type ID" />}
                </Col>
                <Col span={12}>
                    <OverviewBar />
                </Col>
            </Row>

            <Row className="main-content" gutter={16}>
                <Col span={12} className="sunburst">
                    <div className="title">
                        <h1>Status Per Round</h1>
                    </div>
                    <StatusPie />
                </Col>

                <Col span={12} gutter={16} className="main-right">
                    <HorizontalBar className="upper" />

                    <Row gutter={16} className="lower">
                        <Col span={12}>
                            <RouteCard 
                                title="best route"
                                route={testData.bestRoute}
                                icon={<CheckCircleOutlined />}
                                color="#198754"
                            />
                        </Col>
                        
                        <Col span={12}>
                            <RouteCard
                                title="worst route"
                                route={testData.worstRoute}
                                icon={<CloseCircleOutlined/>}
                                color="#dc3545"
                            />
                        </Col>
                    </Row>

                    
                </Col>
            </Row>
        </Container>
    );
}

export default Analytics;