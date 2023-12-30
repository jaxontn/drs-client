export async function GET(req, res) {

    //Handle GET request for /api/webhook
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];

    //send the user as a response
    return new Response(JSON.stringify(users))
}
