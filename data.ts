interface Post {
    id: number,
    title: string,
    imageUrl: string,
    body: string,
    commentsIds: number[]
}

interface Comment {
    id: number,
    postId: string,
    email: string,
    body: string
}

const posts : Post[] = [
    {
        id: 1,
        title: "suriname",
        imageUrl: "aa",
        body: "lorem brolem colem strole",
        commentsIds: [3, 5]
    },
    {
        id: 2,
        title: "pastrame",
        imageUrl: "aa",
        body: "bangalang seimo xame",
        commentsIds: [1, 2]
    },
    {
        id: 3,
        title: "morinome",
        imageUrl: "aa",
        body: "quimbim drimstim dorencoda",
        commentsIds: [1, 4, 6]
    },
    {
        id: 4,
        title: "constacobre",
        imageUrl: "aa",
        body: "pirimban toracopra sum barama",
        commentsIds: [2, 4]
    },
    {
        id: 5,
        title: "pizzapasta",
        imageUrl: "aa",
        body: "maletuza facuntinda serunia borupia",
        commentsIds: [1, 2, 5]
    },
    {
        id: 6,
        title: "formacrista",
        imageUrl: "aa",
        body: "stomeriza conpaza fricamontunda",
        commentsIds: [4, 6]
    }
];

const comments : Comment[] = [
    {
        id: 222,
        postId: string,
        email: string,
        body: string
    }
]