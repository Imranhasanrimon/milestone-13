
const ProductDetailsPage = ({ params }) => {
    const id = params.id;
    const products = [
        {
            _id: "678fa18676faaff40a",
            product_name: "Wireless Headphones",
            product_image: "https://smartbd.com/wp-content/uploads/2023/05/blu1.jpg",
            product_description: "High-quality wireless headphones with noise cancellation."
        },
        {
            _id: "678fa18676faaff40b",
            product_name: "Smartphone",
            product_image: "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/16%20PRO%20MAX/16%20PRO%20MAX-800x800.jpg",
            product_description: "Latest model smartphone with a powerful camera and long battery life."
        },
        {
            _id: "678fa18676faaff40c",
            product_name: "Laptop",
            product_image: "https://demo460.nop-station.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
            product_description: "Lightweight laptop with a high-performance processor and full HD display."
        },
        {
            _id: "678fa18676faaff40d",
            product_name: "Smartwatch",
            product_image: "https://adminapi.applegadgetsbd.com/storage/media/large/Apple-Watch-SE-(2024)-2430.jpg",
            product_description: "Feature-rich smartwatch with heart rate monitoring and GPS tracking."
        },
        {
            _id: "678fa18676faaff40e",
            product_name: "Bluetooth Speaker",
            product_image: "https://www.aiwa.com.bd/wp-content/uploads/2024/02/48.png",
            product_description: "Portable Bluetooth speaker with deep bass and long battery life."
        }
    ];
    const details = products.find(p => p._id == id);
    return (
        <div>
            <p className='text-2xl font-semibold mb-5'>Products Details Page</p>
            <p className="text-gray-400 text-center">Name: {details.product_name}</p>
            <img className="w-60 rounded-xl m-3" src={details.product_image} alt="" />
        </div>
    );
};

export default ProductDetailsPage;