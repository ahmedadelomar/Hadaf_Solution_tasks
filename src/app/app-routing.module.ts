import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataOfSelectedPostComponent } from './data-of-selected-post/data-of-selected-post.component';
import { LayoutComponent } from './layout/layout.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'show-all-post', component: DataOfSelectedPostComponent},
  {path: 'comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
