export async function GET(req, params) {

    const id = await params;

    return Response.json({ ...id, method: 'GET' })
}

export async function DELETE(req, params) {

    const id = await params;

    return Response.json({ ...id, method: 'DELETE' })
}

export async function PATCH(req, { params }) {

    const { id } = params;

    return Response.json({ id, method: 'PATCH' })
}
