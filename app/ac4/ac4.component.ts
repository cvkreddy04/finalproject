import { Component, OnInit } from '@angular/core';



import { Observable } from 'rxjs/internal/Observable';
import { Ac4serviceService } from './ac4service.service';
import { Ac4 } from './ac4';
import { Router } from '@angular/router';



@Component({

 selector: 'app-ac4',

 templateUrl: './ac4.component.html',

 styleUrls: ['./ac4.component.css']

})

export class Ac4Component implements OnInit {



 isupdated: boolean;

 constructor(private router:Router,private ac4service: Ac4serviceService) { }

 ipodetailsList: Observable<Ac4[]>;

 ngOnInit() {

  this.ac4service.getAllIpos().subscribe(data => {

  this.ipodetailsList = data;

  })

 }

 deleteIpos(Ipos : Ac4 ) {

    this.ac4service.deleteIpos(Ipos.ipoid)
  
     .subscribe(
  
      data => {
  
       this.ac4service.getAllIpos().subscribe(data =>{
  
        this.ipodetailsList =data;
  
        });
  
      }) ;
  
   };
  
   updateIpos(Ipos : Ac4 ) {
  
   window.localStorage.removeItem("edit-ipoid");
  
   window.localStorage.setItem("edit-ipoid", Ipos.ipoid.toString());
  
   this.router.navigate(['updateipos']);
  
   };
  
  
  

}

