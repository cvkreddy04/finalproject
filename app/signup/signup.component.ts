import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedFiles: any;
 
  constructor(private router:Router,private userservice:UserserviceService) { }
 
  user : User=new User();  
  submitted = false;

  ngOnInit() {

    var username=window.localStorage.getItem("edit-username");
    if(username!=null&&username!=""){
  
    this.userservice.findOneInAll6(username)
  
      .subscribe(
  
       data => {
  
        this.user =data;
  
        this.usersaveform.setValue(this.user);
  
       }) ;
  
      }
  
    this.submitted = false;
  
   }
   selectFile(event) {  
    const file = event.target.files.item(0);  
   
    if (file.type.match('image.*')) {  
      var size = event.target.files[0].size;  
      if(size > 1000000)  
      {  
          alert("size must not exceeds 1 MB");  
          this.usersaveform.get('profileImage').setValue("");  
      }  
      else  
      {  
        this.selectedFiles = event.target.files;  
      }  
    } else {  
      alert('invalid format!');  
    }  
  
  }     
  
  usersaveform=new FormGroup({

    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  
    email:new FormControl('',[Validators.required,Validators.email]),
  
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
     
    confirmed:new FormControl('',[Validators.required,Validators.minLength(5)]),
    usertype:new FormControl(),
    profileimage:new FormControl()
  
   });
   saveUser(saveuser){

    
    this.user=new User();

    this.user.username=this.Username.value;
  
    this.user.password=this.Password.value;
  
    this.user.email=this.Email.value;
  
    this.user.mobile=this.Mobile.value;
    
    this.user.confirmed=this.Confirmed.value;
    this.user.usertype=this.UserType.value;
    this.user.profileimage=this.ProfileImage.value;
    this.submitted = true;
  
    this.save();
    
   }
   save() {
  
    this.userservice.saveUser(this.user)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.user = new User();
    window.localStorage.removeItem("edit-username");
    this.router.navigate(['user']);
   }
  
  
  
   get Username(){
  
    return this.usersaveform.get('username');
  
   }
   get Password(){
  
    return this.usersaveform.get('password');
  
   }
   get Email(){
  
    return this.usersaveform.get('email');
  
   }
   get Mobile(){
    return this.usersaveform.get('mobile');
   }
   get Confirmed(){
    return this.usersaveform.get('confirmed');
   }
   get UserType(){
    return this.usersaveform.get('usertype');
   }
   get ProfileImage(){
    return this.usersaveform.get('profileimage');
   }

  saveuserForm(){
  
    this.submitted=false;
  
    this.usersaveform.reset();
  
   }

}
