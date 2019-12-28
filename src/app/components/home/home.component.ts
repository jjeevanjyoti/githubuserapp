import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GituserserviceService} from '../../services/gituserservice.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  githubUsers:any;
  singleuser:any;
  userRepoUrl:any;
  username:any;
  constructor(private gituserservice: GituserserviceService,private router: Router,private global:GlobalService) { }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.gituserservice.githubUsers()
      .subscribe((data) => {
         this.githubUsers =data;
         
      });
  }

  userview(user){
   this.global.userDetails=user
   this.router.navigate(['/user-profile']);

  }

  singleUser(){
    alert(this.username)
    this.githubUsers=[]
    this.gituserservice.singleUser(this.username)
    .subscribe((data) => {
       this.githubUsers.push(data);  
    });
  }

}
