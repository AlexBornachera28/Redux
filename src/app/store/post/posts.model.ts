export class PostsStateModel{
    selectPost:Posts [];
    posts : Posts[];
}

export interface Posts{
    id: string;
    text: string;
}