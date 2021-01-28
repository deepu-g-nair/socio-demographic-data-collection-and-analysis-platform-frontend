import React, { Component } from 'react'
import { getJwt } from './help'
import axios from 'axios'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        const jwt = getJwt();
        if (!jwt) {
            this.props.history.push('/Login');
        }
        axios.get('http://192.168.1.11:5000', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => res.setState({
            user: res.data
        })).catch(err => {
            this.props.history.push('/Login ');
        });
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}

export default Auth;