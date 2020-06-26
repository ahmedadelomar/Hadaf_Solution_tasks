import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/service/post.service';
import { Post } from '../shared/model/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = []

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getComments()
  }

  getComments() {
    this.postService.getcomments().toPromise().then(
      response => {
        this.comments = response as Comment[]
      }
    )
  }

}
