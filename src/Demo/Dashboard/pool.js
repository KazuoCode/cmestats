import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Container } from 'react-bootstrap';
import Chart from "chart.js";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';



class Dashboard extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const bar = this.chartRef.current.getContext("2d");

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
            },{
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

    render() {

        return (
            <Aux>
                <Container>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card className="card theme-bg3 bitcoin-wallet">
                                <Card.Body className="text-center">
                                    <div class="column align-items-center justify-content-center">
                                        <h5 class="text-white mb-2">Most power</h5>
                                        <h2 class="text-white mb-3 f-w-300">UE39</h2>
                                        <span class="text-white d-block">200,000,000 national power</span>
                                        <i class="feather icon-zap text-white f-80"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card className="card theme-bg2 bitcoin-wallet">
                                <Card.Body className="text-center">
                                    <div class="column align-items-center justify-content-center">
                                        <h5 class="text-white mb-2">Most intimacy</h5>
                                        <h2 class="text-white mb-3 f-w-300">UE39</h2>
                                        <span class="text-white d-block">200,000 intimacy</span>
                                        <i class="feather icon-heart text-white f-80"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card className="card theme-bg bitcoin-wallet">
                                <Card.Body className="text-center">
                                    <div class="column align-items-center justify-content-center">
                                        <h5 class="text-white mb-2">Most growth</h5>
                                        <h2 class="text-white mb-3 f-w-300">UE39</h2>
                                        <span class="text-white d-block">100% more than the rest</span>
                                        <i class="feather icon-arrow-up-right text-white f-80"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" active>
                    <Tab eventKey="power" title="Power" style={{height: "25vh"}} active>
                        <canvas id="chart-area" style={{ width: "100%", height: "100%" }} ref={this.chartRef}></canvas>
                    </Tab>
                    <Tab eventKey="intimacy" title="Intimacy">

                    </Tab>
                    <Tab eventKey="growth" title="Growth">

                    </Tab>
                </Tabs>
            </Aux >
        );
    }
}

export default Dashboard;