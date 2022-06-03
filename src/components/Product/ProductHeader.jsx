const ProductHeader = (props) => {
    return (
        <div className="w-full my-8 h-[200px] border-y-8 flex items-center justify-center border-red-600">
            <h1 className="text-red-500 text-5xl font-bold">{props.section}</h1>
        </div>
    )
}

export default ProductHeader