import { Component, OnInit } from '@angular/core';



import { Observable } from 'rxjs/internal/Observable';


import { Router } from '@angular/router';
import { SectorserviceService } from '../sectorservice.service';
import { Sector } from '../sector';



@Component({

 selector: 'app-sectorlist',

 templateUrl: './sectorlist.component.html',

 styleUrls: ['./sectorlist.component.css']

})

export class SectorlistComponent implements OnInit {



 isupdated: boolean;

 constructor(private router:Router,private sectorservice: SectorserviceService) { }

 sectorsList: Observable<Sector[]>;

 ngOnInit() {

  this.sectorservice.getAllSectors().subscribe(data => {

  this.sectorsList = data;

  })

 }

 deleteSectors(Sectors : Sector ) {

    this.sectorservice.deleteSectors(Sectors.sectorid)
  
     .subscribe(
  
      data => {
  
       this.sectorservice.getAllSectors().subscribe(data =>{
  
        this.sectorsList =data;
  
        });
  
      }) ;
  
   };
  
   updateSectors(Sectors : Sector ) {
  
   window.localStorage.removeItem("edit-sectorid");
  
   window.localStorage.setItem("edit-sectorid", Sectors.sectorid.toString());
  
   this.router.navigate(['sectors']);
  
   };
  
  
  

}

