import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { Ac1Component } from './ac1/ac1.component';
import { Ac2Component } from './ac2/ac2.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { Ac3Component } from './ac3/ac3.component';
import { Ac4Component } from './ac4/ac4.component';
import { Uc1Component } from './user-portal/uc1/uc1.component';
import { Uc2Component } from './user-portal/uc2/uc2.component';
import { Uc3Component } from './user-portal/uc3/uc3.component';
import { Uc4Component } from './user-portal/uc4/uc4.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';  
import {DataTablesModule} from 'angular-datatables';
import { AddcompanyComponent } from './ac2/addcompany/addcompany.component';
import { UpdateiposComponent } from './ac4/updateipos/updateipos.component';
import { ManageexchangeComponent } from './ac3/manageexchange/manageexchange.component';
import { SectorsComponent } from './admin-portal/sectors/sectors.component';
import { StockpriceComponent } from './admin-portal/stockprice/stockprice.component';
import { SectorlistComponent } from './admin-portal/sectors/sectorlist/sectorlist.component';
import { StocklistComponent } from './admin-portal/stockprice/stocklist/stocklist.component';  
import { HighchartsService } from './user-portal/uc2/highcharts.service';
import { HighchartsChartModule} from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    AdminComponent,
    AdminPortalComponent,
    Ac1Component,
    Ac2Component,
    UserPortalComponent,
    Ac3Component,
    Ac4Component,
    Uc1Component,
    Uc2Component,
    Uc3Component,
    Uc4Component,
    UserComponent,
    UserlistComponent,
    AddcompanyComponent,
    UpdateiposComponent,
    ManageexchangeComponent,
    SectorsComponent,
    StockpriceComponent,
    SectorlistComponent,
    StocklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    DataTablesModule,
    HighchartsChartModule
    

  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
