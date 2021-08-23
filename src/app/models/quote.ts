export class Quote {
    id?: number;
    content: string;
    author: string;
    user: string;
    upvotes: number;
    downvotes: number;
    mostLiked: boolean;

    constructor(id: number, content: string, author: string, user: string, upvotes: number, downvotes: number, mostLiked: boolean) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.user = user;
        this.upvotes = upvotes;
        this.mostLiked = mostLiked;
    }
}
