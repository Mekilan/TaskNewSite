import React, { useState } from "react";
import { Card } from "react-bootstrap";


const DetailPage =(props)=>
{
    const [btnshow,setBtnFun]=useState(true);
    const [count,setCount]=useState(0);

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        document.cookie.split(';').length != 0 && document.cookie.split(';')[0] !== "" ?  document.cookie.split(';').length : 0
      }
      
      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      
      function checkCookie() {
        var id = getCookie(`_id_${props.detailview[0]._id}`);
        if(id !== "")
        {
        if (id !== props.detailview[0]._id) {
        if (id !== "" && id !== null) {
        setCookie(`_id_${props.detailview[0]._id}`, props.detailview[0]._id, 365);
        }
        } 
        }
        else{
        setCookie(`_id_${props.detailview[0]._id}`, props.detailview[0]._id, 365);
        }
      }
    const addCart=()=>
    {
        checkCookie();
        let len= document.cookie.split(';').length != 0 && document.cookie.split(';')[0] !== "" ?  document.cookie.split(';').length : 0;
        window.header.setState({cookielen:len});
        setBtnFun(false);
    }
    const conCart=()=>
    {

    }
    return (
        <React.Fragment>
       {props.detailview.length != 0 ?
       <React.Fragment>
        <div className="row">
            <div className="col-lg-5 det-img">
                <Card className="card-lst">
                    <Card.Img
                        variant="top"
                        src={ props.detailview[0].productImages[0].s3URL}
                        className="card-l-img"
                    />
                </Card>
            </div>
            <div className="col-lg-7">
                <div className="p-nm">
                    <h3>{props.detailview[0].productName }</h3>
                    <hr />
                </div>
                <div className="p-prc">
                <h3>Rs. {props.detailview[0].finalPrice }<span className="fn-prc"><s>{props.detailview[0].totalPrice }</s></span></h3>
                <h3 className="s-per">Save {props.detailview[0].discountPercentage}%</h3>
                <div className="btn-cart">
                <button className="btn btn-success btn-s">WISHLIST</button>
                {btnshow ?
                <button className="btn btn-primary btn-cart-add" onClick={addCart}>Add Cart</button> :
                <button className="btn btn-primary btn-cart-add" onClick={conCart}>Continue to Cart</button> }
                </div>
                <div className="f-etxt">
                <input type="email" className="inp-txt" placeholder="Email Address"/><button className="btn btn-primary btn-n">Notify</button></div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row f-row">
            <h3 >FEATURES</h3>
            </div>
        </div>
        </React.Fragment>
        : null}</React.Fragment> 
    )
}

export default DetailPage;