import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = '398e20f270e692f8cb48';
    private client_secret = '74e7346efd0050c725b279f64639fec92b6537e2';

    constructor(private _http: Http) {
        console.log('Github service ready ....');
        this.username = 'clarenced';
    }

    getUser() {
        let url = `http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        return this._http.get(url).map(res => res.json());
    }

    getRepos() {
        let url = `http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        return this._http.get(url).map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}

