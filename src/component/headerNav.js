import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductList } from "../actions";
import {MyContext} from "./../createContext";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

const periphals = [
  { code: 10, href: "/monitor", name: "monitor"},
  { code: 20, href: "/laptop",name: "laptop"},
  { code: 30, href: "/processor",name: "processor" },
  { code: 40, href: "/ram",name: "ram"},
  { code: 50, href: "/hdd",name: "hdd" }
];

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    window.header=this;
    this.state = {
      scrval: "",
      cookielen: document.cookie.split(';').length != 0 && document.cookie.split(';')[0] !== "" ?  document.cookie.split(';').length : 0
    };
  }
  componentDidMount(props) {
    debugger;
   const {count}= this.props;

  }
  onSearchdata = (evt) => {
    this.setState({ scrval: evt.target.value });
    let data = this.props.productlist.state.filter((item) => {
      let searchValue = item.productName.toLowerCase();
      return searchValue.indexOf(evt.target.value) !== -1;
    });
    window.commomdata.setState({ getdatalist: data });
  };
  cartOnClick=()=>
  {
   this.props.callback(true);
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home" className="cp-logo">
              <img
                src="https://challengerbuildyourpc.com/static/media/navlogo-challenger.d3f33c16.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">BUILD YOUR PC</Nav.Link>
                <Nav.Link href="#link">PRE-BUILD PCs </Nav.Link>
                <Nav.Link href="/laptop">LAPTOPS</Nav.Link>
                <NavDropdown title="PERIPHERALS" id="basic-nav-dropdown">
                  {periphals.map((item, i) => (
                    <NavDropdown.Item
                      href={item.href}
                      key={item.code}
                      eventKey={i}
                      id={item.name}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link href="#about">ABOUT US</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search with Lowercase"
                  className="mr-2"
                  aria-label="Search"
                  onChange={this.onSearchdata}
                />
              </Form>
              <div className="icon-d">
              <a href="#" className="ac-icon" onClick={this.cartOnClick}><i className="fa fa-shopping-cart"> <span className="cart-round">{this.state.cookielen}</span></i></a>
                <a href="#" className="ac-icon" style={{marginLeft:"25px"}}><i className="fa fa-user"></i></a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
export default connect(mapStateToProps, { getProductList })(HeaderNav);
