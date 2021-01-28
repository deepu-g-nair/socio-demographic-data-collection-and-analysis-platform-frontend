import React, { Component } from 'react'
import axios from 'axios'

class Userlogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aid: '',

        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    };

    submit(e) {
        e.preventDefault();
        axios.post('http://192.168.1.11:5000', {
            aid: this.state.aid
        }).then(res => localStorage.setItem('cool-jwt', res.data));
    }
    render() {
        return (
            <div>
                <form>
                    <label>email</label><input type="text" name="email" onChange={e => this.change(e)} value={this.state.aid} />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Userlogin;

