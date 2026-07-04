function ProductStore() {
  const products = [
    {
      id: 123,
      product: "Mouse",
      stock: 0,
    },
    {
      id: 456,
      product: "Laptop",
      stock: 5,
    },
    {
      id: 789,
      product: "Keyboard",
      stock: 10,
    },
  ];

  return (
    <>
      <h1>Product Store</h1>

      {products.map((product) => (
        <div>
          <p>ID: {product.id}</p>
          <p>Product: {product.product}</p>
          <p>Stock: {product.stock}</p>

          {product.stock === 0 ? (
            <p>❌ Out of Stock</p>
          ) : (
            <p>✅ In Stock</p>
          )}

          <hr />
        </div>
      ))}
    </>
  );
}

export default ProductStore;