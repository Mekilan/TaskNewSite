import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";


const RightSideProductList = (props) => {
  const [detailview, setDetail] = useState([]);
  const onCardDetailClick = (evt) => {
    debugger;
    let id=evt.currentTarget.id;
    let data=[];
    data=props.productlist.filter(item=>{return item._id ===id });
    props.callback(data, true);
  };
  return (
    <React.Fragment>
      {props.productlist !== undefined
        ? props.productlist.map((item, i) => (
          <div
            className="col-lg-4 card-list"
            key={i}
            id={item._id}
            onClick={onCardDetailClick}
          >
            <CardGroup>
              <Card className="card-lst">
                <Card.Img
                  variant="top"
                  src={item.productImages[0].s3URL}
                  className="card-l-img"
                />
                <Card.Body>
                  <Card.Title className="txt-ovflw">
                    {item.productName}
                  </Card.Title>
                  <Card.Text className="">Rs: {item.totalPrice}</Card.Text>
                  <Card.Text className="">
                    Save {item.discountPercentage}%
                    </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        ))
        : null}
    </React.Fragment>
  );
};

export default RightSideProductList;
