import React from "react";
import HalfRating from "./HalfRating";

const Item = (props) => {
  const {
    image,
    heading,
    subheading,
    productDetailLine,
    rating,
    countReview,
    hours,
    lectures,
    levels,
    price,
    disprice,
  } = props.itemDetails;

  return (
    <div className="Item">
      <img src={image} alt="teddy" />
        {console.log(image)}
      <div className="Description">
        <div className="About">
          <h3 className="Heading">{heading}</h3>
          <p className="SubHeading">{subheading}</p>
          <p className="ProductDetailLine">{productDetailLine}</p>

          <div className="Rating">
            <span className="NumberRating">{rating} </span>
            <HalfRating rating={rating} />
            <span className="Review"> ({countReview})</span>
          </div>
          <p className="OtherDetails">
            <span>{hours} total hours</span>
            <span> &#9679; {lectures} lectures</span>
            <span> &#9679; {levels} levels</span>
          </p>
        </div>
        <div className="Pricing">
          <p className="CurrentPrice">Rs.{disprice}</p>
          <p className="OriginalPrice">Rs.{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
