import { Component, OnInit } from '@angular/core';


import {FormControl,FormGroup,Validators} from '@angular/forms';


import { Sector } from './sector';
import { SectorserviceService } from './sectorservice.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Router } from '@angular/router';


@Component({

 selector: 'app-sectors',

 templateUrl: './sectors.component.html',

 styleUrls: ['./sectors.component.css']

})

export class SectorsComponent implements OnInit {







  constructor(private router:Router,private sectorservice:SectorserviceService) { }



  sectors : Sector=new Sector();



  submitted = false;


  ngOnInit() {

    var sectorid=window.localStorage.getItem("edit-sectorid");
  if(sectorid!=null&&sectorid!=""){
    this.sectorservice.findOneInAll3(parseInt(sectorid))
  
      .subscribe(
  
       data => {
  
        this.sectors =data;
  
        this.sectorssaveform.setValue(this.sectors);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }
  }


  sectorssaveform=new FormGroup({



  sectorid:new FormControl('' , [Validators.required ] ),



  sectorname:new FormControl('' , [Validators.required ] ),



  brief:new FormControl('',[Validators.required])


  });







  saveSectors(saveSectors){



  this.sectors=new Sector();

  this.sectors.sectorid=this.Sectorid.value;

  this.sectors.sectorname=this.Sectorname.value;

  this.sectors.brief=this.Brief.value;


  this.submitted = true;



  this.save();



  }



  save() {



  this.sectorservice.saveSectors(this.sectors)



   .subscribe(data => console.log(data), error => console.log(error));



  this.sectors = new Sector();
window.localStorage.removeItem("edit-sectorid");
this.router.navigate(['sectorlist'])


  }



  get Sectorid(){



  return this.sectorssaveform.get('sectorid');



  }





  get Sectorname(){



  return this.sectorssaveform.get('sectorname');



  }









  get Brief(){



  return this.sectorssaveform.get('brief');



  }



 


  saveSectorsForm(){



  this.submitted=false;



  this.sectorssaveform.reset();



  }



 }