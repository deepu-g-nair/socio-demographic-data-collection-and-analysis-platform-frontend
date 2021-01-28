import React, { Component, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Line, Scatter,
} from 'recharts';
// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300,
//     },
// ];
class Admindash extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
    componentWillMount() {
        this.renderData();
    }
    constructor(props) {
        super(props)

        this.state = {
            desa: '',
            desb: '',
            desml: ''
        }
    }

    renderData() {
        fetch('http://192.168.1.5:5000/admindashboard', {
            method: "Get",
            headers: {

                'token': localStorage.getItem('jwtToken'),
            },


        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    desa: data['chart1a'],
                    desb: data['chart1b'],
                    desml: data['chartml']
                })
                console.log(this.state.desml)


            })
            .catch((error) => {
                console.error('Error');
            });
    }

    render() {
        return (
            <div>
                <div className="topcolor">

                    <div id="logo">
                        <h1>
                            <a class="navbar-brand" href="index.html">
                                <span>D</span>ossier</a>
                        </h1>
                        <h6 style={{ marginLeft: "auto", float: "right", paddingRight: "30px", marginTop: "10px" }}>Logout</h6>
                    </div>

                </div><br /><br /><br />
                <div style={{ display: "flex" }}>
                    <BarChart
                        width={700}
                        height={400}
                        data={this.state.desa}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="biogas" stackId="a" fill="#8884d8" />
                        <Bar dataKey="compost" stackId="a" fill="#82ca9d" />
                    </BarChart>
                    <ComposedChart
                        width={700}
                        height={400}
                        data={this.state.desml}
                        margin={{
                            top: 20, right: 80, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <Tooltip />
                        <Legend />

                        <XAxis dataKey="x" type="number" label={{ value: 'X-axis', position: 'insideBottomRight', offset: 0 }} />
                        <YAxis unit="" type="number" label={{ value: '% increase in disease ', angle: -90, position: 'insideLeft' }} />
                        <Scatter name="no.of people" dataKey="y" fill="red" />


                        <Line dataKey="redSlope" stroke="red" dot={false} activeDot={false} legendType="none" />
                    </ComposedChart>

                </div><br />
                <h6 style={{ float: "left", marginLeft: '180px' }}>No.of people using compost and biogas</h6>
                <h6 style={{ float: "left", marginLeft: '350px' }}>Chance of occurence of disease with population</h6>
            </div>
        )
    }
}
export default Admindash;







