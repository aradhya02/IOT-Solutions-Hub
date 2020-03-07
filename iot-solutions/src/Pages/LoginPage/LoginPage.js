import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import iotSolutions from './iotSolutions.jpg';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: [],
            password: "",
        }
    }
    saveValues =(e) =>{
        let inputValue = e.currentTarget.value;
        if(e.currentTarget.id == "username"){
            this.setState({
                username : inputValue
            })
        }else{
            this.setState({
                password : inputValue
            })
        }
    }
    validateAdmin = () =>{
        if(this.state.username == "admin" && this.state.password == "admin"){
           this.props.history.push("/dashboard");
        }
    }
    render() {
        return (

            <div className="login-form-container">
                <div className="image-transparecny">

                </div>
                <div className="login-form">
                    <div className="form-heading">
                        <div className="ats-heading">IOT Solutions Hub</div>
                         
                    </div>
                    <div className="form-fields">
                        <form>
                            <div class="input-container">
                                {/* <i class="fa fa-envelope icon"></i> */}
                                <input class="input-field" id="username" onChange={(e)=> this.saveValues(e)} value={this.state.username} type="text" placeholder="Email" name="email" />
                            </div>

                            <div class="input-container">
                                {/* <i class="fa fa-key icon"></i> */}
                                <input class="input-field" id="password" onChange={(e)=> this.saveValues(e)} value={this.state.password} type="password" placeholder="Password" name="psw" />
                            </div>

                            <button type="submit" onClick={this.validateAdmin} class="form-btn">Login</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(LoginPage);