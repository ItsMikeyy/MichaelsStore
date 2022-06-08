const ContainerHalf = (props) => {
    return (
    <div className="w-screen lg:w-1/2 bg-red-500 xl:p-8">
        <h1 className="text-white text-center font-bold text-2xl my-2">{props.title}</h1>
        <p className="p-4">{props.body}</p>
    </div>
    );
}

export default ContainerHalf;