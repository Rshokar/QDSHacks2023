import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import Shovel from '../../assets/shovel.png';
import Dump from '../../assets/dump.png';

import DestinationDropdown from '../../components/DestinationDropdown';
import InsightResult from '../../components/InsightResult';
import StatCard from '../../components/StatCard';
import TiltedHeader from '../../components/TiltedHeader';

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
        </Container>
    )
}

export default Insights;