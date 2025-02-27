import Link from "next/link";

const ProductsPage = () => {

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


    return (
        <div>
            <p className='text-2xl font-semibold mb-5'>ProductsPage</p>
            <div className="flex gap-2">
                {products.map(p => <Link href={`/products/${p._id}`}><img className="w-20 rounded-lg" key={p._id} src={p.product_image} /></Link>)}
            </div>
        </div>
    );
};

export default ProductsPage;