
const UsersPage = async () => {
    const res = await fetch('http://localhost:3000/api/items', { cache: "force-cache" });
    const data = await res.json();
    return (
        <div className="grid grid-cols-3 gap-5 mx-3">
            {data.map(user => <div key={user._id} className="border rounded-lg p-5 text-center">
                <img src={user.image} className="w-12 h-12 rounded-md mx-auto" />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.role}</p>
            </div>)}

        </div>
    );
};

export default UsersPage;