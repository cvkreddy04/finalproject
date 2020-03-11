import { Component, OnInit,ViewChild,



  ElementRef,
 
 
 
  AfterViewInit,
 
 
 
  OnDestroy,
 
 
 
  ChangeDetectorRef, } from '@angular/core';
 
 
 
 
 
 
 import { Router } from '@angular/router';
 
 
 

 
 
 
 import { Observable } from 'rxjs/internal/Observable';
 
 
 
 
 
 
 
 
 
 
 
 import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

 
 
 
 import { of } from 'rxjs';
 
 
 
 import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { HighchartsService } from './highcharts.service';
import { Ac2serviceService } from 'src/app/ac2/ac2service.service';
import { SectorserviceService } from 'src/app/admin-portal/sectors/sectorservice.service';
import { StockserviceService } from 'src/app/admin-portal/stockprice/stockservice.service';
import { Ac2 } from 'src/app/ac2/ac2';
import { Sector } from 'src/app/admin-portal/sectors/sector';
import { Stock } from 'src/app/admin-portal/stockprice/stock';
 
 
 
 
 
 
 
 
 
 
 
 @Component({
 
 
 
  selector: 'app-uc2',
 
 
 
  templateUrl: './uc2.component.html',
 
 
 
  styleUrls: ['./uc2.component.css']
 
 
 
 })
 
 
 
 export class Uc2Component implements OnInit {
 
 
 
  @ViewChild('charts') private chartEl: ElementRef;
 
 
 
 
 
 
 
 
 
 
 
  myGroup: FormGroup;
 
 
 
 
 
 
 
 
 
 
 
  constructor(private hcs: HighchartsService,private formBuilder: FormBuilder,private router:Router,private ac2serviceservice:Ac2serviceService,private sectorserviceservice: SectorserviceService,private stockserviceservice:StockserviceService) { }
 
 
 
  companyList: Ac2[];
 
 
 
  companyListAll: Ac2[];
 
 
 
  sectorsList: Sector[];
 
 
 
  stockpriceList: Observable<Stock[]>;
 
 
 
  ngOnInit() {
 
 
 
  this.hcs.createChart(this.chartEl.nativeElement);
 
 
 
  this.myGroup= this.formBuilder.group({
 
 
 
   "choose": new FormControl([ Validators.required ]),
 
 
 
   "sectorname": new FormControl([ Validators.required ]),
 
 
 
   "companyname": new FormControl([ Validators.required ]),
 
 
 
   "fromdate":new FormControl([ Validators.required ]),
 
 
 
   "todate":new FormControl([ Validators.required ])
 
 
 
   })
 
 
 
  this.ac2serviceservice.getAllCompanies().subscribe(data => {
 
 
 
   this.companyList = data;
 
 
 
   this.companyListAll=data;
 
 
 
   this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;
 
 
 
   })
 
 
 
   this.stockserviceservice.getAllStockprices().subscribe(data => {
 
 
 
   this.stockpriceList = data;
 
 
 
   })
 
 
 
   this.sectorserviceservice.getAllSectors().subscribe(data => {
 
 
 
   this.sectorsList = data;
 
 
 
   })
 
 
 
 
 
 
 
 
 
 
 
  }
 
 
 
  sectorChange()
 
 
 
  {
 
 
 
  alert(1234);
 
 
 
  var sectorValue=this.myGroup.controls['sectorname'].value;
 
 
 
  this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;
 
 
 
  }
 
 
 
 }
 
 