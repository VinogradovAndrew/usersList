import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Post} from '../core/post';

import {UserService} from '../core/user.service';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [UserService]
})
export class PostsComponent implements OnInit {
  title = 'Posts';
  posts: Post[];
  user: null;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let userId: number = this.route.snapshot.params.id;

    Promise.all(
      [
        this.userService.getUser(userId),
        this.userService.getPostsByUser(userId)
      ]
    ).then(values => {
      this.user = values[0];
      this.posts = values[1];
    });
  }

  showComments(postId): void {
    this.router.navigate([`/posts/${postId}/comments`]);
  }
}
