import React, {Component} from 'react';
import './index.css'
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import logout from './logout.svg';
import demoLinks from './demoLinks.svg';


class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="dashboard">
                <div className="header-component">
                    <HeaderComponent />
                </div>
                <div className="menu-and-project">
                <div className="left-menu">
                <span className="demo-icon"></span>
                <span className="settings"></span>
                <img className="logout-icon" src={logout}></img>
                    
                </div>
                <div className="project-tiles">
                    <div className="sff-tile">
                    <div className="sff-heading" onClick={()=> window.open("https://smartfactoryfabric-dev.auth.us-east-1.amazoncognito.com/login?client_id=7h726sp97fi7e5t383abh5mvvi&response_type=code&scope=openid&redirect_uri=https://d2hmmjidvtlws7.cloudfront.net", "_blank")}>Smart Factory Fabric</div>
                    </div>
                    <div className="asset-track-turnkey">
                    <div className="aws-asset-track-tile">
                    <div className="asset-track-heading" onClick={()=>window.open("https://aws-asset-tracking.herokuapp.com/")}>Material Asset Track and Trace</div>
                    </div>
                    <div className="turnkey-tile">
                    <div className="turnkey-heading" onClick={()=>window.open("https://smart-factory-fabrics.herokuapp.com/")}>Turnkey AWS</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;

//https://smartfactoryfabric-dev.auth.us-east-1.amazoncognito.com/login?client_id=7h726sp97fi7e5t383abh5mvvi&response_type=code&scope=openid&redirect_uri=https://d2hmmjidvtlws7.cloudfront.net" 