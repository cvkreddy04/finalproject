import { Component, OnInit } from '@angular/core';


import {FormControl,FormGroup,Validators} from '@angular/forms';

import { Stock } from './stock';
import { StockserviceService } from './stockservice.service';
import { Router } from '@angular/router';




@Component({

 selector: 'app-stockprice',

 templateUrl: './stockprice.component.html',

 styleUrls: ['./stockprice.component.css']

})

export class StockpriceComponent implements OnInit {







  constructor(private router:Router,private stockservice:StockserviceService) { }



  stockprice : Stock=new Stock();



  submitted = false;


  ngOnInit() {

    var stockexchange=window.localStorage.getItem("edit-stockexchange");
   if(stockexchange!=null&&stockexchange!=""){

   
    this.stockservice.findOneInAll5(stockexchange)
  
      .subscribe(
  
       data => {
  
        this.stockprice =data;
  
        this.stockpricesaveform.setValue(this.stockprice);
  
       }) ;
  
  
  
    this.submitted = false;
      }
   }



  stockpricesaveform=new FormGroup({



  companyname:new FormControl('' , [Validators.required ] ),



  stockexchange:new FormControl('' , [Validators.required ] ),



  currentprice:new FormControl('',[Validators.required]),
  date:new FormControl('',[Validators.required]),
  time:new FormControl('',[Validators.required])


  });







  saveStockprice(saveStockprice){



  this.stockprice=new Stock();

  this.stockprice.companyname=this.Companyname.value;

  this.stockprice.stockexchange=this.Stockexchange.value;
  this.stockprice.currentprice=this.Currentprice.value;

  this.stockprice.date=this.Date.value;
  this.stockprice.time=this.Time.value;

  

  


  this.submitted = true;



  this.save();



  }



  save() {



  this.stockservice.saveStockprice(this.stockprice)



   .subscribe(data => console.log(data), error => console.log(error));



  this.stockprice = new Stock();

window.localStorage.removeItem("edit-stockexchange");
this.router.navigate(['stocklist'])

  }



  get Companyname(){



  return this.stockpricesaveform.get('companyname');



  }

  get Stockexchange(){



  return this.stockpricesaveform.get('stockexchange');



  }

  get Currentprice(){



  return this.stockpricesaveform.get('currentprice');



  }


  get Date(){



    return this.stockpricesaveform.get('date');
  
  
  
    }
  
    get Time(){



      return this.stockpricesaveform.get('time');
    
    
    
      }
    
    
 


  saveStockpriceForm(){



  this.submitted=false;



  this.stockpricesaveform.reset();



  }



 }