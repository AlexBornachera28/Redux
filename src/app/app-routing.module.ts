import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';
import { SearchComponent } from './components/search/search.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'posts',
    component: NuevoPostComponent
  },
  {
    path:'todos',
    component:TodosComponent
  },
  {
    path:'posts/:text',
    component:SearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
