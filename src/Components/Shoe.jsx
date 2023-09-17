const Shoe = () => {
  return (
    <main className="shoe container">
      <div className="shoe-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shoe-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="shopping-image">
            <img src="/images/flipkart.png" alt="Flipkart-logo" />
            <img src="/images/amazon.png" alt="Amazon" />
          </div>
        </div>
      </div>
      <div className="Shoe-image">
        <img src="/images/shoe_image.png" alt="Shoe Image"/>
      </div>
    </main>
  );
};

export default Shoe;
