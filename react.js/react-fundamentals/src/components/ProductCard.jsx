function ProductCard({name, category, price}){
    return(
        <div><h1>name {name}</h1>
        <p>{category}</p>
        <p>{price}</p>
        </div>
    )
}
export default ProductCard