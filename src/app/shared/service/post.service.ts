import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsURL = 'https://jsonplaceholder.typicode.com/posts';
  commentsURL = 'https://jsonplaceholder.typicode.com/posts/1/comments';


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.postsURL)
  }
  getcomments() {
    return this.http.get(this.commentsURL)
  }

  deletePost(post: Post) {
    console.log(post.id)
    return this.http.delete(this.postsURL + '/' + post.id)
  }
  editPost(post: Post) {
    return this.http.put(this.postsURL , post)
  }
}
