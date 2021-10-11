import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PostsStateModel } from './posts.model';
import { AddPost, RemovePost, SearchPost } from './posts.actions';
import { state } from '@angular/animations';

@State
({
    name: 'posts',
    defaults: {
      posts: [],
      post: []
    }
}
)

export class PostsState {
    @Selector()
    static getPosts(state: PostsStateModel) { return state.posts; }

    @Action(AddPost)
    add({ getState, patchState }: StateContext<PostsStateModel>, { payload }: AddPost){
      const state = getState();
      patchState({
        posts: [...state.posts, payload]
      });
    }

    @Action(RemovePost)
    remove({ getState, patchState }: StateContext<PostsStateModel>, { payload }: RemovePost) {
    patchState({
      posts: getState().posts.filter(post => post.id !== payload)
    });
  }

  @Action(SearchPost)
  search({ getState, setState }:StateContext<PostsStateModel>, {payload} : SearchPost ){
    const state = getState()
    console.log(state)
    const post = [...state.posts];
    console.log("post => ", post);
    console.log("payload", payload)
    const dato = post.filter(x => x.text === payload);
    console.log("Busqueda : ",dato);

    setState({
      ...state,
      posts: dato
    })

    //post: state.posts.filter(pos => pos.text === payload.text)

  }
}