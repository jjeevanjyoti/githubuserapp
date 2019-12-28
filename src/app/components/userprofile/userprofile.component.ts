import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {GituserserviceService} from '../../services/gituserservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
    user:any;
    userdata:any;
    repos:any;

  constructor(private gituserservice: GituserserviceService,private router: Router,private global:GlobalService) { }

  ngOnInit() {
    console.log(this.global.userDetails)
    if(this.global.userDetails.length==0){
      this.router.navigate(['']);
    }
    this.user=this.global.userDetails
    this.gituserservice.getUserUrlDetails(this.user.url)
    .subscribe((data) => {
       this.userdata=JSON.stringify(data); 
       this.userdata=JSON.parse(this.userdata);
       console.log(this.userdata)
    });

    this.gituserservice.userRepo(this.user.repos_url)
    .subscribe((data) => {
       this.repos =JSON.stringify(data); 
       this.repos= JSON.parse(this.repos);
       console.log("repos"+this.repos)
    });

    
    
  }

  redirect(url){
    window.open(url, "_blank");  
  }

}
