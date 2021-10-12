import { Posts } from "./posts.model";

export class AddPost{
    static readonly type = '[Post] Add';
    constructor(public payload: Posts){}
}

export class RemovePost {
    static readonly type = '[Post] Remove';
    constructor(public payload: string) {}
}

export class SearchPost {
    static readonly type = '[Post] Search'
    constructor(public payload:any ) {}
}

