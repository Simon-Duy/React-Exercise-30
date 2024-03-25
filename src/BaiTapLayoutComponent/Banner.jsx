
const Banner = () => {
    return (
        <div className="banner py-5">
            <div className="content bg-light text-center p-5 rounded">
                <div className="content-detail p-5">
                    <h1 className="fw-bold display-5">A warm welcome!</h1>
                    <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old componenthas been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button className="btn btn-primary btn-lg">Call to action</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;