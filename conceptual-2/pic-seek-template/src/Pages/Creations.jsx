import { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { Link } from "react-router";


const Creations = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/image/all")
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div>
            <PageTitle>Explore Your Creations</PageTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-5">
                {
                    images.map(image => <div key={image._id} className="relative">
                        <img className="rounded-lg" src={image.imgByAI} alt={image.prompt} />
                        <Link to={`/creations/${image._id}`} className="btn btn-sm absolute top-1 left-1">Details</Link>
                    </div>)
                }

            </div>

        </div>
    );
};

export default Creations;