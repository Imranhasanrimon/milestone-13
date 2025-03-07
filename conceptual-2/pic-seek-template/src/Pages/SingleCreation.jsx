import { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { useParams } from "react-router";

const SingleCreation = () => {
    const [image, setImage] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/image/single/${id}`)
            .then(res => res.json())
            .then(data => setImage(data))
    }, [id])

    return (
        <div>
            <PageTitle>Details Page</PageTitle>
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-500">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={image.userImg}
                            alt={image.userName}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <h2 className="text-xl text-black font-semibold">{image.userName}</h2>
                            <p className="text-gray-600 text-sm">{image.email}</p>
                        </div>
                    </div>

                    <h3 className="text-lg font-medium text-gray-800 mb-2">Prompt:</h3>
                    <p className="text-gray-700 mb-4">{image.prompt}</p>

                    <h3 className="text-lg font-medium text-gray-800 mb-2">Category:</h3>
                    <p className="text-gray-700 mb-4">{image.category}</p>

                    <h3 className="text-lg font-medium text-gray-800 mb-2">Generated Image:</h3>
                    <img
                        src={image.imgByAI}
                        alt="AI Generated"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleCreation;