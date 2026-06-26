function ProductCard({name, category, price, inStock}){
    return(
        <div><h1>name {name}</h1>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        {
            inStock ?(
                <p>In Stock</p>
            )
            :(
                <p>Out of Stock</p>
            )
        }
        </div>
    )
}
export default ProductCard