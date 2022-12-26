import Card from '../Card/Card';

function CatalogContainer() {
  return (
    <div className="container max-w-screen my-10">
      <div className="grid md:grid-cols-3 gap-2">
        <Card
          imgUrl="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          text="Men"
        />
        <Card
          imgUrl="https://images.unsplash.com/photo-1549575810-b9b7abc51d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          text="Women"
        />
        <Card
          imgUrl="https://images.unsplash.com/photo-1541580621-cb65cc53084b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          text="Kids"
        />
      </div>
    </div>
  );
}

export default CatalogContainer;
