import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PostsStateModel } from './posts.model';
import { AddPost, RemovePost, SearchPost } from './posts.actions';
import { state } from '@angular/animations';

@State
({
    name: 'posts',
    defaults: {
      posts: [],
      selectPost: null
    }
}
)

export class PostsState {
    @Selector()
    static getPosts(state: PostsStateModel) { return state.posts; }

    @Selector()
    static getSelectPost(state: PostsStateModel) { return state.selectPost }

    @Action(AddPost)
    add({ getState, patchState }: StateContext<PostsStateModel>, { payload }: AddPost): void{
      const state = getState();
      patchState({
        posts: [...state.posts, payload]
      });
    }

    @Action(RemovePost)
    remove({ getState, patchState }: StateContext<PostsStateModel>, { payload }: RemovePost) {
    const state = getState()

    patchState({
      posts: getState().posts.filter(post => post.id !== payload),
      selectPost:  getState().selectPost.filter(post => post.id !== payload)
  
    });
  }

  @Action(SearchPost)
  search({ getState, patchState }:StateContext<PostsStateModel>, {payload} : SearchPost ){
    const state = getState()
    const post = [...state.posts];
    const dato = post.filter(x => x.text === payload);

    if(Object.keys(dato).length === 0 ){
      return alert("no encontrado")
    }

  
    patchState({
      ...state,
      selectPost:dato
    })  

    //post: state.posts.filter(pos => pos.text === payload.text)

  }
}