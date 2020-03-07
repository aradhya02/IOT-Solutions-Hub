import React from 'react';
import './App.css';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }
  
  render() {
    return (
      <Router>

        
          <Route
            exact path='/'
            render={props => <LoginPage {...props} assetName={this.state.assetName} changeMenu={this.changeMenu} />}
          />
          <Route
            path='/dashboard'
            render={(props) => <Dashboard {...props} assetName={this.state.assetName} departmentId={this.state.departmentId} />}
          />

      </Router>

    )
  }
}

export default App;
