const ImgHalf = (props) => {
    return (
        <div className="w-screen lg:w-1/2 ">
            <img className="drop-shadow-2xl brightness-75 h-full w-full" src={props.imgSrc} />
        </div>
    );
}

export default ImgHalf;