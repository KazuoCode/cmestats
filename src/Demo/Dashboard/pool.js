import React from 'react';
import { Row, Col, Card, Tabs, Tab, Container } from 'react-bootstrap';
import Chart from "chart.js";

import Aux from "../../hoc/_Aux";

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            power: {
                name: '',
                total: 0
            },
            intimacy: {
                name: '',
                total: 0
            },
            growth: {
                name: '',
                number: 0
            }
        }
    }

    powerRef = React.createRef();
    intimacyRef = React.createRef();
    growthRef = React.createRef();

    formatNumber(num) {
        return num;
    }

    powerGraph() {
        const bar = this.powerRef.current.getContext("2d");

        var theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.8)');
        theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.8)');
        var theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g2.addColorStop(0, "rgba(255, 0, 100, 0.8)")
        theme_g2.addColorStop(1, "rgba(100, 0, 200, 0.8)")
        var data1 = {
            labels: [0, 1, 2, 3, 4, 5, 6],
            datasets: [{
                label: "UE39",
                data: [50, 55, 60, 70, 75, 80, 85],
                borderWidth: 1,
                borderColor: theme_g1,
                backgroundColor: theme_g1,
                hoverborderColor: theme_g1,
                hoverBackgroundColor: theme_g1,
                fill: 'origin',
            }, {
                label: "UE31",
                data: [40, 50, 55, 60, 65, 70, 75],
                borderWidth: 1,
                borderColor: theme_g2,
                backgroundColor: theme_g2,
                hoverborderColor: theme_g2,
                hoverBackgroundColor: theme_g2,
                fill: 'origin',
            }]
        };
        var myBarChart = new Chart(bar, {
            type: 'line',
            data: data1,
            responsive: true,
            options: {
                barValueSpacing: 20,
                maintainAspectRatio: false,
            }
        });
    }
    intimacyGraph() {
        const bar = this.intimacyRef.current.getContext("2d");

        var theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.8)');
        theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.8)');
        var theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g2.addColorStop(0, "rgba(255, 0, 100, 0.8)")
        theme_g2.addColorStop(1, "rgba(100, 0, 200, 0.8)")
        var data1 = {
            labels: [0, 1, 2, 3, 4, 5, 6],
            datasets: [{
                label: "UE39",
                data: [50, 55, 60, 70, 75, 80, 85],
                borderWidth: 1,
                borderColor: theme_g1,
                backgroundColor: theme_g1,
                hoverborderColor: theme_g1,
                hoverBackgroundColor: theme_g1,
                fill: 'origin',
            }, {
                label: "UE31",
                data: [40, 50, 55, 60, 65, 70, 75],
                borderWidth: 1,
                borderColor: theme_g2,
                backgroundColor: theme_g2,
                hoverborderColor: theme_g2,
                hoverBackgroundColor: theme_g2,
                fill: 'origin',
            }]
        };
        var myBarChart = new Chart(bar, {
            type: 'line',
            data: data1,
            responsive: true,
            options: {
                barValueSpacing: 20,
                maintainAspectRatio: false,
            }
        });
    }
    growthGraph() {
        const bar = this.growthRef.current.getContext("2d");

        var theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.8)');
        theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.8)');
        var theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g2.addColorStop(0, "rgba(255, 0, 100, 0.8)")
        theme_g2.addColorStop(1, "rgba(100, 0, 200, 0.8)")
        var data1 = {
            labels: [0, 1, 2, 3, 4, 5, 6],
            datasets: [{
                label: "UE39",
                data: [50, 55, 60, 70, 75, 80, 85],
                borderWidth: 1,
                borderColor: theme_g1,
                backgroundColor: theme_g1,
                hoverborderColor: theme_g1,
                hoverBackgroundColor: theme_g1,
                fill: 'origin',
            }, {
                label: "UE31",
                data: [40, 50, 55, 60, 65, 70, 75],
                borderWidth: 1,
                borderColor: theme_g2,
                backgroundColor: theme_g2,
                hoverborderColor: theme_g2,
                hoverBackgroundColor: theme_g2,
                fill: 'origin',
            }]
        };
        var myBarChart = new Chart(bar, {
            type: 'line',
            data: data1,
            responsive: true,
            options: {
                barValueSpacing: 20,
                maintainAspectRatio: false,
            }
        });
    }



    componentDidMount() {
        this.powerGraph();
        this.intimacyGraph();
        this.growthGraph();
    }

    render() {

        return (
            <Aux>
                <Container>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card className="card theme-bg3 bitcoin-wallet">
                                <Card.Body className="text-center">
                                    <div className="column align-items-center justify-content-center">
                                        <h5 className="text-white mb-2">Most power</h5>
                                        <h2 className="text-white mb-3 f-w-300">{this.state.power.name}</h2>
                                        <span className="text-white d-block">{this.formatNumber(this.state.power.total)} national power</span>
                                        <i className="feather icon-zap text-white f-80"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card className="card theme-bg2 bitcoin-wallet">
                                <Card.Body className="text-center">
                                    <div className="column align-items-center justify-content-center">
                                        <h5 className="text-white mb-2">Most intimacy</h5>
                                        <h2 className="text-white mb-3 f-w-300">{this.state.intimacy.name}</h2>
                                        <span className="text-white d-block">{this.formatNumber(this.state.intimacy.total)} intimacy</span>
                                        <i className="feather icon-heart text-white f-80"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card className="card theme-bg bitcoin-wallet">
                                <Card.Body className="text-center">
                                    <div className="column align-items-center justify-content-center">
                                        <h5 className="text-white mb-2">Most growth</h5>
                                        <h2 className="text-white mb-3 f-w-300">{this.state.growth.name}</h2>
                                        <span className="text-white d-block">{ this.state.growth.number }% more than the rest</span>
                                        <i className="feather icon-arrow-up-right text-white f-80"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Tabs defaultActiveKey="power" id="uncontrolled-tab-example">
                    <Tab eventKey="power" title="Power" style={{ height: "25vh" }}>
                        <canvas id="powerchart" style={{ width: "100%", height: "100%" }} ref={this.powerRef}></canvas>
                    </Tab>
                    <Tab eventKey="intimacy" title="Intimacy" style={{ height: "25vh" }}>
                        <canvas id="intimacychart" style={{ width: "100%", height: "100%" }} ref={this.intimacyRef}></canvas>

                    </Tab>
                    <Tab eventKey="growth" title="Growth" style={{ height: "25vh" }}>
                        <canvas id="growthchart" style={{ width: "100%", height: "100%" }} ref={this.growthRef}></canvas>
                    </Tab>
                </Tabs>
                <Row style={{ marginTop: "20px" }}>
                    <Col md={4} xl={4}>
                        <Card className="table-responsive">
                            <div className="card User-Activity">
                                <div className="card-header">
                                    <h5>Power ranking</h5>
                                </div>
                            </div>
                            <Card.Body style={{ padding: "0" }}>
                                <div className="card-block pt-0">
                                    <div className="table-responsive" style={{ overflowX: "hidden" }}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Server</th>
                                                    <th>Name</th>
                                                    <th>Power</th>
                                                </tr></thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">1</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">2</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">3</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={4}>
                        <Card className="table-responsive">
                            <div className="card User-Activity">
                                <div className="card-header">
                                    <h5>Intimacy ranking</h5>
                                </div>
                            </div>
                            <Card.Body style={{ padding: "0" }}>
                                <div className="card-block pt-0">
                                    <div className="table-responsive" style={{ overflowX: "hidden" }}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Server</th>
                                                    <th>Name</th>
                                                    <th>Intimacy</th>
                                                </tr></thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">1</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">2</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">3</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={4}>
                        <Card className="table-responsive">
                            <div className="card User-Activity">
                                <div className="card-header">
                                    <h5>Growth ranking</h5>
                                </div>
                            </div>
                            <Card.Body style={{ padding: "0" }}>
                                <div className="card-block pt-0">
                                    <div className="table-responsive" style={{ overflowX: "hidden" }}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Server</th>
                                                    <th>Name</th>
                                                    <th>Power</th>
                                                </tr></thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">1</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">2</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="m-0">3</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">UE39</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">Kaz</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">10000000</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux >
        );
    }
}

export default Dashboard;