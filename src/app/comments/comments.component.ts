import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../core/user.service';
import {Comment} from '../core/comment';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [UserService]
})
export class CommentsComponent implements OnInit {
  title = 'Comments';
  comments: Comment[];
  post: null;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let postId: number = this.route.snapshot.params.id;

    Promise.all(
      [
        this.userService.getPost(postId),
        this.userService.getCommentByPost(postId)
      ]
    ).then(values => {
      this.post = values[0];
      this.comments = values[1];
    });
  }
}
