export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data
}
const PostsPage = async () => {
    const allPosts = await getPosts();
    return (
        <div className="grid grid-cols-3 gap-6 mx-2">
            {allPosts.map(p => <div className="border p-5 rounded-lg" key={p.id}>
                <h2 className="text-2xl text-gray-400">{p.title}</h2>
                <p>{p.body}</p>
            </div>)}
        </div>
    );
};

export default PostsPage;