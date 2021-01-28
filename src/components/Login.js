import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard';


import { Redirect } from 'react-router-dom'
import './css/userlogin.css';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aid: '',
            aidStatus: '0',
            otp: '',
            redirect: null
        }
    }
    changeaid(e) {
        this.setState({
            aid: e.target.value
        })
    }
    changeotp(e) {
        this.setState({
            otp: e.target.value
        })
    }
    clickaid = () => {
        const data = { aadharnum: this.state.aid };
        console.log(typeof this.state.aid);



        fetch('http://192.168.1.5:5000/login/userlogin', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data['valid'] === true) {
                    this.setState({
                        aidStatus: '1'
                    })
                }
                else {
                    console.log("error dey")
                }

            })
            .catch((error) => {
                console.error('Error:', error);

            });

    }
    clickotp = () => {
        const dataotp = { aadhar: this.state.aid, otp: this.state.otp };
        console.log(typeof this.state.aid);



        fetch('http://192.168.1.5:5000/login/validateotp', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataotp),

        })
            .then(response => response.json())
            .then(data => {
                if (data === "invalid") {
                    console.log(data);
                }
                else {
                    console.log(data)
                    const jwtToken = window.localStorage;
                    localStorage.setItem('jwtToken', data['token']);

                    this.setState({ redirect: "/dash" });
                }

            })
            .catch((error) => {
                console.error('Error');
            });

    }

    // clickjwt = () => {
    //     const datajwt = { token: localStorage.getItem('jwtToken') };
    //     console.log(datajwt);



    //     fetch('http://192.168.1.11:5000/userdashboard', {
    //         method: "Get",
    //         headers: {

    //             'token': localStorage.getItem('jwtToken'),
    //         },


    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("succccc", data);

    //         })
    //         .catch((error) => {
    //             console.error('Error');
    //         });

    // }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        if (this.state.aidStatus === '0') {
            return (

                <div>

                    <div className="topcolor">

                        <div id="logo">
                            <h1>
                                <a class="navbar-brand" href="index.html"
                                ><span>D</span>ossier</a>
                            </h1>
                        </div>

                    </div>


                    <hr />
                    <div className="details">
                        User Login
      </div>
                    <div className="box">
                        <input onChange={e => this.changeaid(e)} value={this.state.aid} className="inputfield" type={Text} placeholder="Enter Aadhar Number Here"></input>
                    </div>
                    <button onClick={this.clickaid} type="submit" className="btn">SUBMIT</button>

                    <div className="details1">
                        <Link to="/adminlogin"> Are You an Official?</Link>
                    </div>





                </div>




            );
        }
        else if (this.state.aidStatus === '1') {
            return (
                <div>

                    <div className="topcolor">

                        <div id="logo">
                            <h1>
                                <a class="navbar-brand" href="index.html"
                                ><span>D</span>ossier</a>
                            </h1>
                        </div>

                    </div>


                    <hr />
                    <div className="details">
                        Enter OTP
  </div>
                    <div><br />
                        <input type="text" onChange={e => this.changeotp(e)} value={this.state.otp} className="form-control" id="name" placeholder="Enter OTP" name="name" style={{ marginTop: "5px", width: "500px" }} />
                        <br />

                        <button onClick={this.clickotp} type="submit" className="btn btn-default" style={{ marginTop: "20px", marginLeft: "50px" }}>Submit</button>

                    </div>
                </div>

            );
        }

    }




}

export default Login;