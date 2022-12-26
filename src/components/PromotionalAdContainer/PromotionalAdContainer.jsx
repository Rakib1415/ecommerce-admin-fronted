import React from 'react';
import Card from '../Card/Card';

function PromotionalAdContainer() {
  return (
    <div className="container max-w-screen my-10">
      <div className="grid md:grid-cols-2 gap-2">
        <Card
          imgUrl="https://img.freepik.com/free-vector/new-season-banner-template_1361-1221.jpg?w=1380&t=st=1666707534~exp=1666708134~hmac=8a782c27ae276b993b4b485f6875cccc5eb38a367fb515a30c56ed7e9e2ee3db"
          text="Grab the season"
          textStyle
        />
        <Card
          imgUrl="https://img.freepik.com/free-vector/floral-new-collection-banner-template_1361-1251.jpg?w=1380&t=st=1666707552~exp=1666708152~hmac=3b9880a173b03847238077d13d21e45e370f836670fdf83de2e8ecb0680f1b6a"
          text="Hurry up!"
          textStyle
        />
      </div>
    </div>
  );
}

export default PromotionalAdContainer;
