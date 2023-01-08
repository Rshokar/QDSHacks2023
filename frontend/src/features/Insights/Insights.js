import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import Shovel from '../../assets/shovel.png';
import Dump from '../../assets/dump.png';

import DestinationDropdown from '../../components/DestinationDropdown';
import InsightResult from '../../components/InsightResult';
import StatCard from '../../components/StatCard';
import { VerticalBar1, VerticalBar2, VerticalBar3, VerticalBar4 } from '../../components/VerticalBar';
import TiltedHeader from '../../components/TiltedHeader';
import BarLegend from '../../components/BarLegend';

import { Container } from './styled';
import { routes, kpi, testData } from './constants';

const Insights = () => {
    const shovelSites = Object.keys(routes);

    const [loading, setLoading] = useState(false);
    const [shovel, setShovel] = useState(shovelSites[0]);
    const [dumpSites, setDumpsites] = useState(routes[shovel]);
    const [dump, setDump] = useState(null);
    const [data, setData] = useState(testData.kpi);

    useEffect(() => {
        setDumpsites(routes[shovel]);
        setDump(null);
        setLoading(true);
    }, [shovel]);

    useEffect(() => {
        data && setLoading(false);
    }, [data])

    useEffect(() => {
        // TODO: refetch data
    }, [dump]);

    const renderStats = (data) => data.map((d) => {
        console.log(kpi[d.label]);
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
                <div className="title">
                    <h1>Truckin' Sights</h1>
                </div>
            </Row>

            <div className="main-wrapper">
                <Row className="main-content" gutter={16}>
                    <Col span={6}>
                        <DestinationDropdown
                            text="Shovel Site"
                            icon={Shovel}
                            defOpt={true}
                            options={shovelSites}
                            opt={shovel}
                            onSelectionChanged={(s) => setShovel(s)}/>
                    </Col>

                    <Col span={12} className="mid">
                        <InsightResult />
                    </Col>

                    <Col span={6}>
                        <DestinationDropdown
                            text="Dump Site"
                            icon={Dump}
                            options={dumpSites}
                            opt={dump}
                            onSelectionChanged={(s) => setDump(s)}/>
                    </Col>
                </Row>                
            </div>

            <Row gutter={16} style={{paddingBottom: "16px"}}>
                <Col span={6}>
                    <TiltedHeader text="average" />
                </Col>

                <Col span={18}>
                    <Row gutter={16}>
                        {renderStats(testData.kpi)}
                    </Row>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={6}>
                    <TiltedHeader text="projected" />
                </Col>

                <Col span={18}>
                    <Row gutter={16}>
                        <Col span={2}>
                            <BarLegend 
                                color={`${process.env.REACT_APP_PRIMARY_COLOR}`}
                                label="average"
                                width="24px"
                                height="12px"
                            />
                            <BarLegend 
                                color={`${process.env.REACT_APP_SECONDARY_COLOR}`}
                                label="projected"
                                width="24px"
                                height="12px"
                            />
                        </Col>
                        <Col span={4}>
                            <div style={{width: "200px", height: "150px"}}>
                                <VerticalBar1 />
                            </div>
                        </Col>
                        <Col span={4}>
                            <div style={{width: "200px", height: "150px"}}>
                                <VerticalBar2 />
                            </div>
                        </Col>
                        <Col span={4}>
                            <div style={{width: "200px", height: "150px"}}>
                                <VerticalBar3 />
                            </div>
                        </Col>
                        <Col span={4}>
                            <div style={{width: "200px", height: "150px"}}>
                                <VerticalBar4 />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Insights;