import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import {Post} from './post';
import {Comment} from './comment';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private rootUrl = 'https://jsonplaceholder.typicode.com';

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }
  getUser(id): Promise<any> {
    const url = `${this.rootUrl}/users/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError)
  }
  getPost(id): Promise<any> {
    const url = `${this.rootUrl}/posts/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError)
  }
  getUsers(): Promise<any> {
    const url = `${this.rootUrl}/users`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError)
  }

  getCommentByPost(postId): Promise<any> {
    const url = `${this.rootUrl}/posts/${postId}/comments`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Comment[])
      .catch(this.handleError)
  }

  getPostsByUser(userId): Promise<any> {
    const url = `${this.rootUrl}/posts?userId=${userId}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError)
  }
}
