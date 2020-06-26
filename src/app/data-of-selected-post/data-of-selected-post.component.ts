import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/model/post';
import { PostService } from '../shared/service/post.service';

@Component({
  selector: 'app-data-of-selected-post',
  templateUrl: './data-of-selected-post.component.html',
  styleUrls: ['./data-of-selected-post.component.css']
})
export class DataOfSelectedPostComponent implements OnInit {

  posts: Post[] = []

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts().toPromise().then(
      response => {
        this.posts = response as Post[]
      }
    )
  }

  deletePost(post: Post) {
    this.postService.deletePost(post);
  }

  editPost(post: Post) {
    this.postService.editPost(post);
  }

}
