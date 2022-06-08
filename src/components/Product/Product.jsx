import { useState } from "react"

const Product = (props) => {
    const clickHandler = () => {
        props.onAdd();
    }
    return (
        <div className="animate-fade border-4 border-gray-200 w-[300px] relative p-8 m-4">
         <img src={props.imgSrc} className="w-[250px] h-[250px]"/>
            <h3 className="text-xl font-bold my-4 mr-4">{props.title}</h3>
            <p>{props.desc}</p>
            <h3 className="text-lg font-bold">{props.price}</h3>
            <button onClick={clickHandler} className="bg-red-600 text-white w-1/2 p-2 absolute bottom-0 rounded right-0 m-4 hover:bg-red-800">Add To Cart</button>
        </div>
    );
}

export default Product;