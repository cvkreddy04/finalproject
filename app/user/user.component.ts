import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  submitted: boolean;
  user: User;

  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit() {
  }
  usersaveform=new FormGroup({



    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  
  
  
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] )
  
   });
  
  
  
   get Username(){
  
  
  
    return this.usersaveform.get('username');
  
  
  
    }
  
    get Password(){
  
  
  
    return this.usersaveform.get('password');
  
  
  
    }
  
   findByUsernameAndPassword(findByUsernameAndPassword){
  
  
  
    this.user=new User();
  
  
  
    this.user.username=this.Username.value;
  
  
  
    this.user.password=this.Password.value;
  
    this.submitted = true;
  
    this.userservice.findByUsernameAndPassword(this.user.username,this.user.password)
  
  
  
    .subscribe(data => { this.user=data;
  
  
  
    if(this.user!=null && this.user.usertype=='admin'){
  
     alert("2222"+this.user.usertype);
  
     this.router.navigate(['admin-portal']);
  
  
  
     }
  
  
  
     else if(this.user!=null && this.user.usertype=='user'){
  
  
  
     this.router.navigate(['user-portal']);
  
  
  
     }
  
    else{
  
      this.router.navigate(['user']);
  
    }
  
  
  
  
  
    },
  
  
  
     error => console.log(console.error()));
  
  
  
    }
  
}
