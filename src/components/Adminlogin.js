import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Admindash from './Admindash'
import './css/userlogin.css';
class Adminlogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uname: '',
            pass: '',
            redirect: null
        }
    }
    changeuname(e) {
        this.setState({
            uname: e.target.value
        })
    }
    changepass(e) {
        this.setState({
            pass: e.target.value
        })
    }

    click = () => {
        const dataotp = { uname: this.state.uname, pwd: this.state.pass };




        fetch('http://192.168.1.5:5000/login/officiallogin', {
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

                    this.setState({ redirect: "/admindash" });
                }

            })
            .catch((error) => {
                console.error('Error');
            });

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
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
                <div id="heading" className="details">
                    Admin Login
</div>




                <input type="text" onChange={e => this.changeuname(e)} value={this.state.uname} className="form-control" id="name" placeholder="Enter username" name="name" style={{ marginTop: "5px", width: "500px" }} /><br />
                <input type="password" onChange={e => this.changepass(e)} value={this.state.pass} className="form-control" id="name" placeholder="Enter passowrd" name="name" style={{ marginTop: "5px", width: "500px" }} />

                <button id="submitbutton" onClick={this.click} type="submit" className="btn btn-default" style={{ marginTop: "20px", marginLeft: "50px" }}>Submit</button>

            </div>

        );
    }
}
export default Adminlogin;