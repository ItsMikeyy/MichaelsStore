const Brand = (props) => {
    return(
        <div className="w-3/4 m-0 mx-auto my-16">
            <img className={`w-[${props.imgWidth ? props.imgWidth : "200px"}] h-[150px] mx-auto my-4`} src={props.imgSrc} />
            <h2 className="text-6xl text-center font-bold my-4">{props.brandName}</h2>
            <p className="text-center text-md my-4">{props.desc}</p>
        </div>
    );
}

export default Brand;