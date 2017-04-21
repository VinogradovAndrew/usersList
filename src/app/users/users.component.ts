import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../core/user.service';
import {User} from '../core/user';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[];
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  showPosts(userId): void {
    this.router.navigate([`users/${userId}/posts`]);
  }

  onEvent(e) {
    e.stopPropagation();
  }
}
