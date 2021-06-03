import React from "react";
import ContentPage from "./contentPage";
import { connect } from "react-redux";
import { getProductList } from "../../actions";


class ContentPageCommon extends React.Component {
  constructor(props) {
    super(props);
    window.commomdata = this;
    this.state = {
      catdata: "laptop",
      getdatalist: []
    };
  }
  async componentDidMount() {
    let path = "";
    if (this.props.history.location.pathname !== "/") {
      path = this.props.history.location.pathname.split("/")[1];
    } else {
      path = this.props.history.location.pathname;
    }
    let querystring = "?limit=10&page=2&category=" + path;
    await this.props.getProductList(querystring);
    this.setState({}, () => {
      this.setState({ getdatalist: this.props.productlist.state });
    });
  }
  callBackFunc = (data) => {
    this.setState({}, () => {
      this.setState({ getdatalist: this.props.productlist.state });
    });
  };
  render() {
    return (
      <div>
        <ContentPage listdata={this.state.getdatalist} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productlist: state.productlist,
    totalpage: state.totalPage
  };
};
export default connect(mapStateToProps, { getProductList })(ContentPageCommon);
