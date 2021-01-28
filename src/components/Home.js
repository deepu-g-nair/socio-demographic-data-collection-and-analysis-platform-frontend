import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './css/bootstrap.css';
import './css/style.css';
import './css/font-awesome.css';
import Pic from './images/img.jpg';
import { brush } from 'd3';

class Home extends Component {
    render() {
        return (
            <div>

                <div className="main-content" style={{ minHeight: "15em" }} id="home">

                    <header className="header">
                        <div className="container">

                            <nav className="pb-3" style={{ paddingTop: "10px" }}>

                                <div id="logo">
                                    <h1 style={{ paddingLeft: "25px" }}>
                                        <a href="" className="navbar-brand" style={{ marginLeft: "-160px", marginTop: "-30px" }}>
                                            <span>D</span>ossier</a>
                                        <Link to="/login">
                                            <button type="button" style={{ "width": "120px", "height": "40px", backgroundColor: "#ff3838", marginLeft: "950px", marginTop: "-90px", fontWeight: 600, color: "white", textDecoration: "none", borderRadius: "2%", borderColor: "#ff3838" }}> Login</button>
                                        </Link>
                                    </h1>
                                </div>

                            </nav>

                        </div>
                    </header>

                    <section className="banner" style={{ height: "90vh" }}>
                        <div className="container">
                            <div className="row banner-grids">
                                <div className="col-lg-6 banner-info-w3ls">
                                    <h3 className="mb-3"> Socio Demographic Data Analytic system</h3>
                                    <p className="mb-4">
                                        This offers a unique way for a comprehensive, periodic, decentralised, systematic and verifiable data collection, processing and managing system.
              </p>
                                    <a href="" className="btn" style={{ paddingBottom: "32px" }}>Read More</a>
                                </div>
                                <div className="col-lg-6 banner-image">
                                    <div className="img-effect">
                                        <img src={Pic} alt="" className="img-fluid image1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <br />
                <br />
                <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">
                    <span className="sub-tittle">Advantages</span>Know what we are and what we do
          </h3>
                <div className="feature-grids row mt-3 mb-lg-5 mb-3 text-center">
                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="bottom-gd px-3">
                            <span className="fa fa-building-o" aria-hidden="true"></span>
                            <h3 className="my-4">DE-CENTRALIZED</h3>
                            <p>
                                Move departments of (a large organization) away from a single administrative centre to other locations.
                </p>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="bottom-gd2-active px-3">
                            <span className="fa fa-cogs" aria-hidden="true"></span>
                            <h3 className="my-4">ONE PLATFORM FOR ALL</h3>
                            <p>
                                A one platform for all datas
                </p>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="bottom-gd px-3">
                            <span className="fa fa-cogs" aria-hidden="true"></span>
                            <h3 className="my-4">ACCURATE DATA</h3>
                            <p>
                                We collect and provides accurate data that will be used in many real time ocations.
                </p>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Home;

