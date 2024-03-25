import demopic from "./../assets/image/demopic.png";

const Item = () => {
    return (
        <div className="col">
            <div className="item-content overflow-hidden rounded-3 text-center">
                <img className="w-100" src={demopic} alt="Đây là ảnh Demo" />
                <div className="item-desc py-3 px-4 text-center">
                    <h2 className="fs-3">Card Title</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ullam eaque eos?</p>
                </div>
                <div className="item-btn bg-body-tertiary px-2 py-4 border">
                    <button className="btn btn-primary btn-lg fs-6">Find Out More!</button>
                </div>
            </div>
        </div>
    );
}

export default Item;