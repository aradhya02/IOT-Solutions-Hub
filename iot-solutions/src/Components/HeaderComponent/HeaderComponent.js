import React, { Component } from 'react';
import DeloitteLogo from './Deloitte_logo.png';
import awsIcon from './aws.png';
import './HeaderComponent.scss'
//import arrow from '../../images/arrow-down.svg';
//import NotificationComponent from '../../Components/NotificationComponent/index';
import { withRouter, Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      showNotifications: false,
      countDisplay : "show"
    }
  }

  render() {
    return (
      <header className="header">

        <section className="logos">
          <div className="aws-logo">
            <img src={awsIcon} alt="awsIcon" className="aws" />
          </div>
          <hr></hr>
          <div className="deloitte-icon">
            <img src={DeloitteLogo} alt="DeloitteLogo" className="deloitte" />
          </div>
        </section>

        <section className="title">
          <h1>IOT Solutions Hub</h1>
        </section>

      </header>
    );
  }
}
export default withRouter(HeaderComponent);