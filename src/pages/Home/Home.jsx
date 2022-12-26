import React from 'react';
import CatalogContainer from '../../components/CatalogContainer/CatalogContainer';
import PromotionalAdContainer from '../../components/PromotionalAdContainer/PromotionalAdContainer';

function Home() {
  return (
    <>
      <CatalogContainer />
      <section className="container max-w-screen my-10">
        <div className="grid md:grid-cols-2 gap-2 w-full px-2">
          <div className="bg-black text-white text-center">
            <h4 className="p-2">Free delivery in Dhaka city till 30 Nov</h4>
          </div>

          <div className="bg-black text-white text-center">
            <h4 className="p-2">Free delivery in Dhaka city till 30 Nov</h4>
          </div>
        </div>
      </section>
      <PromotionalAdContainer />
    </>
  );
}

export default Home;
