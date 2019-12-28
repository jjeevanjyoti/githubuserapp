import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GituserserviceService  {
  git_user_URL:any;
  singleuser_url:any;
  constructor(private http: HttpClient) { 
     this.git_user_URL="https://api.github.com/users?since=135"
     this.singleuser_url="https://api.github.com/users/"
  }

githubUsers(){
     return this.http.get(this.git_user_URL);
}

userRepo(repoUrl){
  return this.http.get(repoUrl);
}

getUserUrlDetails(userUrl){
  return this.http.get(userUrl);
}

singleUser(username){
  return this.http.get(this.singleuser_url+username);
}
}
