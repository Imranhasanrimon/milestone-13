
const dashbordLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3 bg-gray-600">
                <p>menu Iten</p>
                <p>menu Iten</p>
                <p>menu Iten</p>
                <p>menu Iten</p>
                <p>menu Iten</p>
            </div>
            <div className="bg-gray-700 col-span-9">
                {children}
            </div>
        </div>
    );
};

export default dashbordLayout;