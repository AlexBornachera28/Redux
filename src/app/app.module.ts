import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';
import { PostsComponent } from './components/posts/posts/posts.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';
import { PostsState } from './store/post/posts.sate';
import { TodosComponent } from './components/todos/todos.component';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';
import { DeletePostComponent } from './components/delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NuevoPostComponent,
    SearchComponent,
    HomeComponent,
    TodosComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    NgxsModule.forRoot([PostsState],
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
