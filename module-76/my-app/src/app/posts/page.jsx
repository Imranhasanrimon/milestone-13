import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600", "700", "800", "900"],
    subsets: ["latin"],
})

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
            {allPosts.map(p => <div className="border border-gray-800 p-5 rounded-lg flex flex-col" key={p.id}>
                <div className="flex-grow">
                    <h2 className={`text-2xl text-gray-300 ${poppins.className}`}>{p.title}</h2>
                    <p className="text-gray-400">{p.body}</p>
                </div>
                <Link className="p-2 bg-gray-800 rounded-md mt-2 text-center hover:bg-gray-700" href={`/posts/${p.id}`}>Details</Link>
            </div>)}
        </div>
    );
};

export default PostsPage;