import React from "react";
import "./styles.css";
import { Router, Route } from "react-router-dom";
import ContentPageCommon from "./component/ContentPage/contentPageCommon";
import DetailPage from "./component/DetailPage";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./component/headerNav";
import CartList from "./component/CartList";
import history from "./History";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcartlist:false
    };
  }

onCallBackFun=(data)=>
{
this.setState({showcartlist:data});
}
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <HeaderNav callback={this.onCallBackFun}/> 
          <div>
          {!this.state.showcartlist ?
          <React.Fragment>
          <Route
            path="/:monitor?/:laptop?/:hdd?/:processor?/:ram?"
            exact
            component={ContentPageCommon}
          ></Route>
           <Route
            path="/:monitor/:id?/:laptop/:id?/:hdd/:id?/:processor/:id?/:ram/:id?"
            exact
            component={DetailPage}
          ></Route> </React.Fragment>:
          <React.Fragment> <CartList/></React.Fragment> }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
