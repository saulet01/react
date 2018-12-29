import React from 'react';
import Moment from 'moment';
import {Card, CardHeader, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({dish}){
  Moment.locale('en');
  if(dish != null){
    const commentDish = dish.map( (dis) => {
      return(
        <div>
          <CardText>{dis.comment}</CardText>
          <CardText><strong>Author: </strong> {dis.author}, <strong>Date: </strong>{Moment(dis.date).format('d MMM YYYY')}</CardText>
          <br></br>
        </div>
      );
    });

    return(
      <div>
        <Card>
          <CardHeader tag="h4" className="text-center">Comments</CardHeader>
          <CardBody>
            {commentDish}
          </CardBody>
        </Card>
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
}

function RenderDish({dish}){
    if(dish != null){
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else{
      return(
         <div></div>
      );
    }
  }

const DishDetail = (props) => {
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish = {props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish = {props.comments} />
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
