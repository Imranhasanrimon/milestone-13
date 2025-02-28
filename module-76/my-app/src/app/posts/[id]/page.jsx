export const getSinglePost = async (singlePostId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${singlePostId}`);
    const data = await res.json();
    return data
}

export async function generateMetadata({ params }) {
    // read route params
    const id = (await params).id

    // fetch data
    const post = await getSinglePost(id)

    return {
        title: post.title.slice(0, 15),
    }
}

const SinglePostPage = async ({ params }) => {
    const paramss = await params;
    const singlePost = await getSinglePost(paramss.id);
    return (
        <div className="m-6">
            <strong className="">{singlePost.id}</strong>
            <h2 className="text-2xl text-gray-400">{singlePost.title}</h2>
            <p>{singlePost.body}</p>
        </div>
    );
};

export default SinglePostPage;