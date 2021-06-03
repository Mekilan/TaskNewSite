import React, { useState } from "react";
import LeftFilterPage from "./LeftFilterPage";
import RightSideProductList from "./rightSideProductList";
import DetailPage from './../DetailPage';
import Spinner from 'react-bootstrap/Spinner';
//import Paginator from "./paginator";

const ContentPage = (props) => {
  const [detaildata, SetDetailData] = useState([]);
  const [showdata, SetCardShow] = useState(false);
  const callBackFun = (data, state) => {
    SetDetailData(data);
    SetCardShow(true);
  };
  return (
    <div className="container">
      {!showdata ?
        <div className="row">
          <div className="col-lg-12">
            <a href="#i">
              <img src="/img/poster.jpeg" alt="" className="img-bg" />
            </a>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <LeftFilterPage />
            </div>
            <div className="col-lg-9">
              <div className="row">
                {props.listdata === undefined ? <Spinner animation="grow" variant="info" className="al-spin" /> :
                  props.listdata.length !== 0 ? 
                    <RightSideProductList
                      productlist={props.listdata}
                      callback={callBackFun}
                    />
                    :
                  <div className="no-fnd">No Data Found...</div>
                }
              </div>
            </div>
          </div>

          {/*<div className="row">
          <div className="col">
            <Paginator totalpages={totalPages} />
          </div>
                </div>*/}
        </div> : <DetailPage detailview={detaildata} />}
    </div>
  );
};

export default ContentPage;
