import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';

import { Ac3serviceService } from './ac3service.service';
import { Ac3 } from './ac3';
import { Router } from '@angular/router';

@Component({

 selector: 'app-ac3',

 templateUrl: './ac3.component.html',

 styleUrls: ['./ac3.component.css']

})

export class Ac3Component implements OnInit {

 isupdated: boolean;



 constructor(private router: Router,private ac3service: Ac3serviceService) { }

 stockexchangeList: Observable<Ac3[]>;

 ngOnInit() {

  this.ac3service.getAllStocks().subscribe(data => {

  this.stockexchangeList = data;

  })

 }
 deletestockexchange(Stocks : Ac3 ) {

  this.ac3service.deleteStockexchange(Stocks.stockexid)

   .subscribe(

    data => {

     this.ac3service.getAllStocks().subscribe(data =>{

      this.stockexchangeList =data;

      });

    }) ;

 };

 updatestockexchange(Stocks : Ac3 ) {

 window.localStorage.removeItem("edit-stockexid");

 window.localStorage.setItem("edit-stockexid", Stocks.stockexid.toString());

 this.router.navigate(['manageexchange']);

 };





}





