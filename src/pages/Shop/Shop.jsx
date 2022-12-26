import React from 'react';
import Card from '../../components/Card/Card';
import MessageCard from '../../components/MessageCard/MessageCard';
import ProductContainer from '../../components/ProductContainer/ProductContainer';

function Shop() {
  return (
    <>
      <div className="container min-w-screen my-10">
        <div className="flex flex-wrap gap-2">
          <div className="flex md:flex-row sm: flex-col">
            <Card
              imgUrl="https://img.freepik.com/free-psd/editable-turtleneck-t-shirt-mockup-psd-men-rsquo-s-casual-business-fashion-ad_53876-138385.jpg?w=1380&t=st=1666795321~exp=1666795921~hmac=152e335952b6fb5a33aeb55a33585433ef2dbb769d1e0b2325a43234bdf32205"
              text="Grab the season"
              textStyle
            />
            <Card
              imgUrl="https://img.freepik.com/free-psd/editable-men-s-t-shirt-psd-mockup-black-gray-activewear-ad_53876-123296.jpg?w=1380&t=st=1666795196~exp=1666795796~hmac=a28eb393f03e451a13b75bb62804c15ca7c90f7862f8b991d8fdaa271534a46f"
              text="Hurry up!"
              textStyle
            />
          </div>
        </div>
      </div>
      <h2 className="container text-2xl font-roboto font-semibold">
        Featured Products
      </h2>
      <ProductContainer />
      <div className="container min-w-screen my-10">
        <MessageCard
          message="Free delivery in Dhaka city till 30 Nov"
          isLargeSize
        />
      </div>
    </>
  );
}

export default Shop;
