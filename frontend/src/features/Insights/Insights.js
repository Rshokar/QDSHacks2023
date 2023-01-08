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
import Controller from '../../controllers/Controller';

const Insights = () => {
    const shovelSites = Object.keys(routes);
    const con = new Controller();

    const [loading, setLoading] = useState(false);
    const [shovel, setShovel] = useState(shovelSites[0]);
    const [dumpSites, setDumpsites] = useState(routes[shovel]);
    const [dump, setDump] = useState(null);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        setDumpsites(routes[shovel]);
        setDump(null);
    }, [shovel]);

    useEffect(() => {
        data && setLoading(false);
    }, [data])

    useEffect(() => {
        const run = async () => {
            const d = await con.getInsights(shovel, dump);
            setData(d);
            setLoading(false);
        }

        if (dump) {
            setLoading(true);
            run();
        } else {
            setData(undefined);
        }
    }, [dump]);

    const renderStats = (data) => data.map((d) => {
        console.log(kpi[d.label]);
        return (
            <Col span={6}>
                <StatCard
                    title={d.label}
                    value={d.value}
                    unit={kpi[d.label]["unitLong"] || kpi[d.label]["unit"]}
                    icon={kpi[d.label]["icon"]} />
            </Col>
        );
    });

    const round = (num) => Math.round(num * 100) / 100;

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
                            onSelectionChanged={(s) => setShovel(s)} />
                    </Col>

                    <Col span={12} className="mid">
                        <InsightResult loading={loading} result={data?.best_truck.id}/>
                    </Col>

                    <Col span={6}>
                        <DestinationDropdown
                            text="Dump Site"
                            icon={Dump}
                            options={dumpSites}
                            opt={dump}
                            onSelectionChanged={(s) => setDump(s)} />
                    </Col>
                </Row>
            </div>

            <Row gutter={24} style={{ paddingBottom: "16px" }} className="bars">
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
                    <div style={{ width: "200px", height: "200px" }}>
                        <VerticalBar1 data={data && [{
                            projected: round(data.best_truck.efficiency),
                            name: 'Efficiency',
                            avg: round(data.efficiency)
                        }]} />
                    </div>
                </Col>
                <Col span={4}>
                    <div style={{ width: "200px", height: "200px" }}>
                        <VerticalBar2 data={data && [{
                            projected: round(data.best_truck.time_per_round),
                            name: 'Time Per Round',
                            avg: round(data.time_per_round)
                        }]} />
                    </div>
                </Col>
                <Col span={4}>
                    <div style={{ width: "200px", height: "200px" }}>
                        <VerticalBar3 data={data && [{
                            projected: round(data.best_truck.load_per_round),
                            name: 'Load Per Round',
                            avg: round(data.load_per_round)
                        }]} />
                    </div>
                </Col>
                <Col span={4}>
                    <div style={{ width: "200px", height: "200px" }}>
                        <VerticalBar4 data={data && [{
                            projected: round(data.best_truck.fuel_rate_per_round),
                            name: 'Fuel Rate Per Round',
                            avg: round(data.fuel_rate_per_round)
                        }]} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Insights;