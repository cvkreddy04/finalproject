
import { Component, OnInit } from '@angular/core';



import {FormControl,FormGroup,Validators} from '@angular/forms';


import { Ac3serviceService } from '../ac3service.service';
import { Ac3 } from '../ac3';
import { Router } from '@angular/router';

@Component({

 selector: 'app-manageexchange',

 templateUrl: './manageexchange.component.html',

 styleUrls: ['./manageexchange.component.css']

})

export class ManageexchangeComponent implements OnInit {

  constructor(private router:Router,private ac3service:Ac3serviceService) { }
 stockexch : Ac3=new Ac3();
  submitted = false;
 
 
 
  ngOnInit() {

    var stockexid=window.localStorage.getItem("edit-stockexid");
  
    this.ac3service.findOneInAll4(parseInt(stockexid))
  
      .subscribe(
  
       data => {
  
        this.stockexch =data;
  
        this.stockexchangesaveform.setValue(this.stockexch);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }
  



  stockexchangesaveform=new FormGroup({



  stockexid:new FormControl('',[Validators.required]),



  stockexchange:new FormControl('',[Validators.required]),



  brief:new FormControl('',[Validators.required]),



  remarks:new FormControl('',[Validators.required]),



  contactaddress:new FormControl('',[Validators.required ])

  });







  saveStockExchange(saveStockExchange){



  this.stockexch=new Ac3();



  this.stockexch.stockexid=this.Stockexid.value;

  this.stockexch.stockexchange=this.Stockexchange.value

  this.stockexch.brief=this.Brief.value;

  this.stockexch.remarks=this.Remarks.value;

  this.stockexch.contactaddress=this.Contactaddress.value;



  this.submitted = true;



  this.save();



  }



  save() {



  this.ac3service.saveStockdata(this.stockexch)



   .subscribe(data => console.log(data), error => console.log(error));



  this.stockexch = new Ac3();
 window.localStorage.removeItem("edit-stockexid");
 this.router.navigate(['ac3'])


  }



  get Stockexid(){



  return this.stockexchangesaveform.get('stockexid');



  }



  get Stockexchange(){



  return this.stockexchangesaveform.get('stockexchange');



  }



  get Brief(){



  return this.stockexchangesaveform.get('brief');



  }





  get Remarks(){



  return this.stockexchangesaveform.get('remarks');



  }



  get Contactaddress(){



  return this.stockexchangesaveform.get('contactaddress');



  }



  saveStockExchangeForm(){



  this.submitted=false;



  this.stockexchangesaveform.reset();



  }



 }



