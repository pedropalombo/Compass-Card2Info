interface Post {
    id: number,
    title: string,
    imageUrl: string,
    body: string
}

interface Comments {
    id: number,
    postId: string,
    email: string,
    body: string
}