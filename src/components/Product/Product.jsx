const Product = (props) => {
    return (
        <div className="border-4 border-gray-200 w-[300px] h-[450px] p-8 m-4">
            <img src={props.imgSrc} className="w-[250px] h-[250px]"/>
            <h3 className="text-xl font-bold my-4 mr-4">{props.title}</h3>
            <p>{props.desc}</p>
            <h3 className="text-lg font-bold">{props.price}</h3>
        </div>
    )
}

export default Product;