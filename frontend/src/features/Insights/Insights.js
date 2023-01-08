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
import { routes } from './constants';

const Insights = () => {
    const shovelSites = Object.keys(routes);

    const [shovel, setShovel] = useState(shovelSites[0]);
    const [dumpSites, setDumpsites] = useState(routes[shovel]);
    const [dump, setDump] = useState(null);

    useEffect(() => {
        setDumpsites(routes[shovel]);
        setDump(null);
    }, [shovel]);

    useEffect(() => {
        // TODO: refetch data
    }, [dump]);

    return (
        <Container>
            <Row gutter={16}>
                <div className="title">
                    <h1>Truckin' Sights</h1>
                </div>
            </Row>

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