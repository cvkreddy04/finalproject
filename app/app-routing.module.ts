import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { Ac2Component } from './ac2/ac2.component';
import { Ac1Component } from './ac1/ac1.component';
import { Ac3Component } from './ac3/ac3.component';
import { Ac4Component } from './ac4/ac4.component';
import { Uc1Component } from './user-portal/uc1/uc1.component';
import { Uc2Component } from './user-portal/uc2/uc2.component';
import { Uc3Component } from './user-portal/uc3/uc3.component';
import { Uc4Component } from './user-portal/uc4/uc4.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddcompanyComponent } from './ac2/addcompany/addcompany.component';
import { UpdateiposComponent } from './ac4/updateipos/updateipos.component';
import { ManageexchangeComponent } from './ac3/manageexchange/manageexchange.component';
import { SectorsComponent } from './admin-portal/sectors/sectors.component';
import { StockpriceComponent } from './admin-portal/stockprice/stockprice.component';
import { SectorlistComponent } from './admin-portal/sectors/sectorlist/sectorlist.component';
import { StocklistComponent } from './admin-portal/stockprice/stocklist/stocklist.component';

const routes: Routes = [{path:"appcomponent",component:AppComponent},
{path:"",component:MainComponent},
{path:"Main",component:MainComponent},
{path:"signup",component:SignupComponent},
{path:"admin",component:AdminComponent},
{path:"admin-portal",component:AdminPortalComponent},
{path:"ac2",component:Ac2Component},
{path:"ac1",component:Ac1Component},
{path:"ac3",component:Ac3Component},
{path:"ac4",component:Ac4Component},
{path:"uc1",component:Uc1Component},
{path:"uc2",component:Uc2Component},
{path:"uc3",component:Uc3Component},
{path:"uc4",component:Uc4Component},
{path:"user-portal",component:UserPortalComponent},
{path:"user",component:UserComponent},
{path:"ul",component:UserlistComponent},
{path:"add",component:AddcompanyComponent},
{path:"updateipos",component:UpdateiposComponent},
{path:"manageexchange",component:ManageexchangeComponent},
{path:"sectors",component:SectorsComponent},
{path:"stockprice",component:StockpriceComponent},
{path:"sectorlist",component:SectorlistComponent},
{path:"stocklist",component:StocklistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
