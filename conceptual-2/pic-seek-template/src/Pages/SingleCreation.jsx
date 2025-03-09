import { useContext, useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SingleCreation = () => {
    const { user, login } = useContext(AuthContext);
    const [image, setImage] = useState({});
    const [comments, setComments] = useState([]);
    const { id } = useParams()
    const [updateComment, setUpdateComment] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/image/single/${id}`)
            .then(res => res.json())
            .then(data => {
                setImage(data);
                fetch(`http://localhost:5000/api/v1/comment/all-comments/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        setComments(data)
                    })
            })
    }, [id, updateComment])

    const checkUser = () => {
        if (!user) {
            Swal.fire({
                title: "Please Login",
                text: "Join as a Creator with One Click",
                imageUrl: "https://img.icons8.com/?size=100&id=szz75vJoS2OI&format=gif",
                imageHeight: "80px",
                imageAlt: "Custom image",
                showCancelButton: true,
                confirmButtonText: `Login using Google`,
                confirmButtonColor: "#149b9b",
            }).then((res) => {
                if (res.isConfirmed) {
                    login()
                        .then((res) => {
                            const user = res.user;
                            console.log(user);
                            Swal.fire("success", "Welcome", "success");
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!checkUser()) return;
        const form = e.target;
        const userComment = form.userComment.value;
        const commentDoc = {
            userEmail: user.email,
            userName: user.displayName,
            AIImageId: id,
            userImg: user.photoURL || "https://img.icons8.com/?size=48&id=hAWG9NB2Dzjv&format=png",
            userComment,
            imagePrompt: image.prompt
        }

        await axios.post('http://localhost:5000/api/v1/comment/reply', commentDoc)



        form.reset()
        setUpdateComment(!updateComment)
    }

    return (
        <div className="">
            <PageTitle>Details Page</PageTitle>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:max-w-1/2 mx-auto my-5">
                <div>
                    <div className="bg-gray-200 shadow-lg rounded-lg p-4">
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
                            className="rounded-lg shadow-md w-full border-2 border-gray-600"
                        />
                    </div>
                </div>

                <div className="bg-gray-200 shadow-lg rounded-lg p-4 text-black space-y-3 md:max-h-[800px] overflow-auto">
                    <h3 className="text-3xl font-semibold">Comments</h3>

                    {
                        comments.map(comment => <div key={comment._id} className="border border-gray-600 rounded-lg p-2">

                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 border  rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={comment.userImg} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {comment.userName}
                                    <time className="text-xs opacity-50">12:45</time>
                                </div>
                                <div className="chat-bubble text-sm">{comment.userComment}</div>
                                <div className="chat-footer opacity-50">Delivered</div>
                            </div>

                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 border p-1 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.icons8.com/?size=100&id=saSupsgVcmJe&format=png&color=000000" />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Pic Seek
                                    <time className="text-xs opacity-50">12:46</time>
                                </div>
                                <div className="chat-bubble text-sm">{comment.AIreply}</div>
                                <div className="chat-footer opacity-50">Seen at 12:46</div>
                            </div>

                        </div>)
                    }

                    <form onSubmit={handleSubmit} className="border border-primary p-4 rounded-lg bg-primary/10">
                        <textarea name="userComment" className="border w-full rounded-sm p-2" placeholder="What's on your mind about this image?"></textarea>
                        <button className="btn btn-sm w-full">Add Comment</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default SingleCreation;