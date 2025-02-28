import Link from "next/link";
export const metadata = {
    title: "Posts",
    description: "all posts are fetched from json placeholder",
};


export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data
}
const PostsPage = async () => {
    const allPosts = await getPosts();
    return (
        <div className="grid grid-cols-3 gap-6 mx-2">
            {allPosts.map(p => <div className="border p-5 rounded-lg flex flex-col" key={p.id}>
                <div className="flex-grow">
                    <h2 className="text-2xl text-gray-400">{p.title}</h2>
                    <p>{p.body}</p>
                </div>
                <Link className="p-2 bg-gray-800 rounded-md mt-2 text-center hover:bg-gray-700" href={`/posts/${p.id}`}>Details</Link>
            </div>)}
        </div>
    );
};

export default PostsPage;