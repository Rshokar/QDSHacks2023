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
import Controller from '../../controllers/Controller';

const Analytics = () => {
    const con = new Controller();
    const [dateFilter, setDateFilter] = useState('');
    const [filter, setFilter] = useState(filterOpts[0]);
    const [id, setId] = useState(1);
    const [date, setDate] = useState(null);
    const [globalData, setGlobalData] = useState(null);
    const [localData, setLocalData] = useState(testData.kpi);
    const [barData, setBarData] = useState(null);
    const [bestRoute, setBestRoute] = useState({
        shovel: 0,
        dump: 0,
        avg: 0
    });
    const [worstRoute, setWorstRoute] = useState({
        shovel: 0,
        dump: 0,
        avg: 0
    });

    useEffect(() => {
        // TODO:
        //      -> Query DB for globalData await con.analyticsOverall(id)
        //      -> Will also need globalData (over 7 days) for truck ID 1 at this point (default)
        //          -> setLocalData to result

        const run = async () => {
            console.log(id);
            const doc = await con.getAnalyticsOverall(parseFloat(id));
            const docs = await con.getAnalytics(parseFloat(id));

            console.log("Analytics overall", doc);
            console.log("Analytics", docs);

            const result = {
                worstRoute: {
                    shovel: doc[0].worst_shovel_id,
                    dump: doc[0].worst_dump_id,
                    avg: doc[0].worst_efficiency,
                },
                bestRoute: {
                    shovel: doc[0].best_shovel_id,
                    dump: doc[0].best_dump_id,
                    avg: doc[0].best_efficiency,
                },
                kpi: [
                    {
                        label: "efficiency",
                        value: round(docs[0].Efficiency),
                    },
                    {
                        label: "time per round",
                        value: round(docs[0].time),
                    },
                    {
                        label: "load per round",
                        value: round(docs[0].payload),
                    },
                    {
                        label: "fuel rate",
                        value: round(docs[0].avg_fuel),
                    }
                ],
            }

            console.log(result);
            setLocalData(result);

            setBestRoute({
                shovel: doc[0].best_shovel_id,
                dump: doc[0].best_dump_id,
                avg: round(doc[0].best_efficiency)
            })
            setWorstRoute({
                shovel: doc[0].worst_shovel_id,
                dump: doc[0].worst_dump_id,
                avg: round(doc[0].worst_efficiency)
            })


        }

        run();

    }, [id]);



    useEffect(() => {
        setDate(dateFilter ? dayjs(dateFilter) : null);
        const run = async () => {
            const docs = await con.getAnalyticsSummary(dateFilter || "overall");
            console.log(docs);

            const result = [
                {
                    label: "efficiency",
                    value: round(docs.efficiency.min),
                },
                {
                    label: "time per round",
                    value: round(docs.time.min),
                },
                {
                    label: "load per round",
                    value: round(docs.payload.min),
                },
                {
                    label: "fuel rate",
                    value: round(docs.fuel_rate.min),
                }
            ]
            setGlobalData(result);




        }

        run();
    }, [dateFilter]);

    // useEffect(() => {
    //     // Filter igonore

    //     // id truck_id

    //     // dateFilter date

    //     const run = async () => {
    //         const documents = await con.getAnalytics(id, dateFilter);
    //         console.log(documents);
    //     }

    //     run();
    // }, [filter, dateFilter, id]);

    const renderGlobalStats = (data) => data.map((d) => {
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
                        ? <FilterDropdown onSelectionChanged={(s) => setId(s)} text="Truck ID" options={truckIDs} icon={<Icon component={Truck} />} />
                        : <FilterDropdown text="Type ID" />}
                </Col>
                <Col span={12}>
                    <OverviewBar data={localData?.kpi} />
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
                    <div style={{ height: "400px" }}>
                        <HorizontalBar className="upper" />
                    </div>

                    <Row gutter={16} className="lower">
                        <Col span={12}>
                            <RouteCard
                                title="best route"
                                route={bestRoute}
                                icon={<CheckCircleOutlined />}
                                color="#198754"
                            />
                        </Col>

                        <Col span={12}>
                            <RouteCard
                                title="worst route"
                                route={worstRoute}
                                icon={<CloseCircleOutlined />}
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