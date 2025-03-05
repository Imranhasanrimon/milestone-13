
const Generate = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const prompt = e.target.prompt.value;
        const form = new FormData()
        form.append('prompt', prompt)

        fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.VITE_CLIPDROP_API_KEY,
            },
            body: form,
        })
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const blob = new Blob([buffer], { type: "image/png" });
                const url = URL.createObjectURL(blob);
                console.log(url);
            })
    }
    return (
        <div className='w-11/12 mx-auto flex flex-col gap-4 items-center mt-5'>
            <h2 className='text-center text-2xl font-semibold'>Generate An Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="join">
                    <input
                        type="text"
                        name='prompt'
                        placeholder="username@site.com"
                        className="input input-bordered join-item" />
                    <button className="btn btn-primary join-item">Generate</button>
                </div>
            </form>
        </div>
    );
};

export default Generate;