import { Component, OnInit } from '@angular/core';



import { Observable } from 'rxjs/internal/Observable';


import { Router } from '@angular/router';
import { StockserviceService } from '../stockservice.service';
import { Stock } from '../stock';



@Component({

 selector: 'app-stocklist',

 templateUrl: './stocklist.component.html',

 styleUrls: ['./stocklist.component.css']

})

export class StocklistComponent implements OnInit {



 isupdated: boolean;

 constructor(private router:Router,private stockservice: StockserviceService) { }

 stockList: Observable<Stock[]>;

 ngOnInit() {

  this.stockservice.getAllStockprices().subscribe(data => {

  this.stockList = data;

  })

 }

 deleteStockprice(stockprice : Stock ) {

    this.stockservice.deleteStockprice(stockprice.stockexchange)
  
     .subscribe(
  
      data => {
  
       this.stockservice.getAllStockprices().subscribe(data =>{
  
        this.stockList =data;
  
        });
  
      }) ;
  
   };
  
   updateStockprice(stockprice : Stock ) {
  
   window.localStorage.removeItem("edit-stockexchange");
  
   window.localStorage.setItem("edit-stockexchange", stockprice.stockexchange.toString());
  
   this.router.navigate(['stockprice']);
  
   };
  
  
  

}

