import React from "react";
import { connect } from "react-redux";
import { Card} from "react-bootstrap";
import { getAllProduct } from "../actions/cookieaction";

class CartList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        getcartdata:[],
        cookielen: document.cookie.split(';').length != 0 && document.cookie.split(';')[0] !== "" ?  document.cookie.split(';').length : 0
      };
    }
    async componentDidMount(){
        debugger;
        let querystring = "?limit=10&page=2&category=laptop";
        await this.props.getAllProduct(querystring);
        this.setState({},()=>
        {
        var cookielen=this.state.cookielen;
        let arr=[];
        if(cookielen.length != 0)
        {
          for(var i=0;i < cookielen;i++)
          {
              let filter=this.props.cookiereducer.state.filter(item=>{return item._id === document.cookie.split(';')[i].split('_')[2].split("=")[0]});
              if(filter.length != 0)
              {
              arr.push(filter[0]);
              }
          }
        }
         this.setState({getcartdata:arr});
        });
      }
       deleteCookie=(name)=>{
        this.setCookie(name,"",-1);
      }
       setCookie=(name, value, expirydays) =>{
        var d = new Date();
        d.setTime(d.getTime() + (expirydays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires;
       }
      removeItem=(evt)=>
      {
       let id=evt.currentTarget.id;
       let filterdata=this.state.getcartdata.filter(item=>{return item._id != id});
       this.setState({getcartdata:filterdata})
       let name = "_id_"+ id;
       this.deleteCookie(name)
       window.header.setState({cookielen: filterdata.length});
      }
    render()
    {
    return(
    <div className="container">
            <h3 className="crt-h3">My Cart ({this.state.getcartdata.length})</h3>
        <div className="row cart-l-rw">
        {this.state.getcartdata.length !=0 ?
        this.state.getcartdata.map((item,i)=>(
            
            <Card className="card-lst" key={item._id}>
                <div className="row">
                  <div className="col-md-3">
                <Card.Img
                  variant="top"
                  src={item.productImages[0].s3URL}
                  className="card-cart-img"
                />
                 </div>
                 <div className="col-md-7">
                <Card.Body>
                  <Card.Title className="txt-ovflw-crt">
                    {item.productName}
                  </Card.Title>
                  <Card.Text className="">
                    Save {item.discountPercentage}%
                    </Card.Text>
                    </Card.Body>
                    </div>
                    <div className="col-md-2 crt-rs">
                    <Card.Body>
                  <Card.Text className="">Rs: {item.totalPrice}</Card.Text>
                </Card.Body>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 removeitem">
                <a href="#" className="remove-l" id={item._id} onClick={this.removeItem} >Remove Item</a>
                </div>
            </div>
              </Card> )): <div className="txt-nol">
                 <h3 className="emp-c">Your Cart is Empty</h3>
                  </div>}
              
        </div>
        <div className="row">
            
        </div>
    </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      cookiereducer: state.cookiereducer,
    };
  };
  
export default connect(mapStateToProps,{getAllProduct})(CartList);