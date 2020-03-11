import { Component, OnInit } from '@angular/core';



import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Ac2 } from 'src/app/ac2/ac2';
import { Ac2serviceService } from 'src/app/ac2/ac2service.service';
import { Router } from '@angular/router';






@Component({



 selector: 'app-addcompany',



 templateUrl: './addcompany.component.html',



 styleUrls: ['./addcompany.component.css']



})



export class AddcompanyComponent implements OnInit {

 constructor(private router:Router,private ac2service: Ac2serviceService) { }



 company: Ac2 = new Ac2();

 submitted = false;

 
ngOnInit() {

    var companyname=window.localStorage.getItem("edit-companyname");
  
    this.ac2service.findOneInAll1(companyname)
  
      .subscribe(
  
       data => {
  
        this.company =data;
  
        this.companysaveform.setValue(this.company);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }
  
  

 companysaveform = new FormGroup({

  companyname: new FormControl('', [Validators.required]),

  ceoname: new FormControl('', [Validators.required]),

  turnover:new FormControl('',[Validators.required]),

  bod: new FormControl('', [Validators.required]),

  listedinse: new FormControl('', [Validators.required]),

  sector: new FormControl('', [Validators.required]),

  remarks: new FormControl('', [Validators.required]),

  stockcode: new FormControl('', [Validators.required])

 });

 saveCompany(saveCompany) {



  this.company = new Ac2();

  this.company.companyname = this.Companyname.value;

  this.company.turnover = this.Turnover.value

  this.company.ceoname = this.Ceoname.value;

  this.company.bod = this.Bod.value;

  this.company.listedinse = this.Listedinse.value;

  this.company.sector = this.Sector.value;

  this.company.remarks = this.Remarks.value;

  this.company.stockcode = this.Stockcode.value;

  this.submitted = true;

  this.save();

 }

 save() {

  this.ac2service.saveCompanydata(this.company)

   .subscribe(data => console.log(data), error => console.log(error));

  this.company = new Ac2();
  window.localStorage.removeItem("edit-companyname")
  this.router.navigate(['ac2'])
 }

 get Companyname() {

  return this.companysaveform.get('companyname');

 }

 get Turnover() {

  return this.companysaveform.get('turnover');

 }

 get Ceoname() {

  return this.companysaveform.get('ceoname');

 }

 get Bod() {

  return this.companysaveform.get('bod');

 }

 get Listedinse() {

  return this.companysaveform.get('listedinse');

 }

 get Sector() {

  return this.companysaveform.get('sector');

 }

 get Remarks() {

  return this.companysaveform.get('remarks');

 }

 get Stockcode() {

  return this.companysaveform.get('stockcode');

 }

 saveCompanyForm() {

  this.submitted = false;

  this.companysaveform.reset();

 }

}