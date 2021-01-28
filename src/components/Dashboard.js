import React, { Component } from 'react'
import './css/dash.css'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            aadhar: '',
            phone: '',
            ownvehicle: '',
            transport: '',
            checked: 'checked',
            val1: '',
            val2: '',
            val3: '',
            val4: ''
        }
    }
    componentWillMount() {
        this.renderData();
    }
    renderData() {
        fetch('http://192.168.1.5:5000/userdashboard', {
            method: "Get",
            headers: {

                'token': localStorage.getItem('jwtToken'),
            },


        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data['name'],
                    aadhar: data['aadhar'],
                    phone: data['phone'],
                    ownvehicle: data['ownvehicle'],
                    transport: data['transport']
                })
                console.log("succccc", data);

            })
            .catch((error) => {
                console.error('Error');
            });
    }
    radioVal = () => {
        alert("Data submitted successfully")


    }

    render() {







        return (
            <div>
                <div className="topcolor">

                    <div id="logo">
                        <h1>
                            <a class="navbar-brand" href="index.html"
                            ><span>D</span>ossier</a>
                        </h1>
                        <h6 style={{ marginLeft: "auto", float: "right", paddingRight: "30px", marginTop: "5px" }}>Logout</h6>
                    </div>

                </div>
                <br />
                <div className="container">
                    <div className="paper">
                        <h2>Personal Details</h2>

                        <div className="input">
                            <input className="input__input" id="foobar1" type="text" disabled />
                            <label className="input__label" style={{ color: "grey" }}>full name : {this.state.name}</label>
                            <div className="input__bar"></div>
                            <div className="input__hint">Your first name as it appears on your Aadhar card.</div>
                        </div>
                        <div className="input">
                            <input className="input__input" id="foobar2" type="text" disabled />
                            <label className="input__label" style={{ color: "grey" }}>aadhar id : {this.state.aadhar}</label>
                            <div className="input__bar"></div>
                            <div className="input__hint">Your 12 digit aadhar no.</div>
                        </div>
                        <div className="input">
                            <input className="input__input" id="foobar3" type="text" disabled />
                            <label className="input__label" style={{ color: "grey" }} >phone number : {this.state.phone}</label>
                            <div className="input__bar"></div>
                            <div className="input__hint">Your valid 10 digit phone number</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="paper">
                        <h2>Transport</h2>

                        <div className="input">
                            <input className="input__input" id="foobar1" type="text" disabled />
                            <label className="input__label" style={{ color: "grey" }}>means of transportation : {this.state.transport}</label>
                            <div className="input__bar"></div>
                            <div className="input__hint">Your first name as it appears on your Aadhar card.</div>
                        </div>
                        <div className="input">
                            <input className="input__input" id="foobar2" type="text" disabled />
                            <label className="input__label" style={{ color: "grey" }}>number of vehicles owned : {this.state.ownvehicle}</label>
                            <div className="input__bar"></div>
                            <div className="input__hint">Your 12 digit aadhar no.</div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="paper">
                        <h2>Health Care</h2><br />
                        <h6>Primary health centers available within 3km</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>No</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        </div>
                        <br />
                        <h6>IF not available ,provide distance  to nearest hospital</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>3-5km</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>5-10 km</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>more than 10km</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <br />
                        <h6>Clinics available within 3km</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>No</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="paper">
                        <h2>Water</h2><br />
                        <h6>Source of water for daily use</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Public water connection</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Tap</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Hand pumb</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Well</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Water bodies</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <br />
                        <h6>Is drinking water available</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>No</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        </div>
                        <br />
                        <h6>Times available per day</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Always</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Intermmediate</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>Rarely available</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <br />
                        <h6>Distance to source</h6><br />
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>0-3 km</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>3-5 km</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" style={{ width: "15px" }} />&nbsp;&nbsp;<label style={{ marginTop: "9px" }}>more than 5km</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>

                    </div>
                    <input type="submit" onClick={this.radioVal} />
                </div><br />


            </div>
        )
    }
}
