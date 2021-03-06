export class Quote {
    id?: number;
    content: string;
    author: string;
    user: string;
    upvotes: number;
    downvotes: number;
    createDate: Date;
    mostLiked: boolean;

    constructor(id: number, content: string, author: string, user: string, upvotes: number, downvotes: number, createDate: Date, mostLiked: boolean) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.user = user;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.createDate = createDate;
        this.mostLiked = mostLiked;
    }
}
