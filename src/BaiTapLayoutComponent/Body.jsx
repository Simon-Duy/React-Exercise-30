import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
    return (
        <div className="container px-5 pb-5">
            <Banner />
            <div className="row row-cols-4 gx-4">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default Body;