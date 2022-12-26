import React from 'react';
import CatalogContainer from '../../components/CatalogContainer/CatalogContainer';
import MessageCard from '../../components/MessageCard/MessageCard';
import PromotionalAdContainer from '../../components/PromotionalAdContainer/PromotionalAdContainer';

function Home() {
  return (
    <>
      <CatalogContainer />
      <section className="container max-w-screen my-10">
        <div className="grid md:grid-cols-2 gap-2 w-full px-2">
          <MessageCard message="Free delivery in Dhaka city till 30 Nov" />

          <MessageCard message="Free delivery in Dhaka city till 30 Nov" />
        </div>
      </section>
      <PromotionalAdContainer />
    </>
  );
}

export default Home;
