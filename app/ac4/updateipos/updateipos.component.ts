import { Component, OnInit } from '@angular/core';


import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Ac4serviceService } from '../ac4service.service';
import { Ac4 } from '../ac4';
import { Router } from '@angular/router';


@Component({

 selector: 'app-updateipos',

 templateUrl: './updateipos.component.html',

 styleUrls: ['./updateipos.component.css']

})

export class UpdateiposComponent implements OnInit {







  constructor(private router:Router,private ac4service:Ac4serviceService) { }



  ipodetails : Ac4=new Ac4();



  submitted = false;



 
  ngOnInit() {

    var ipoid=window.localStorage.getItem("edit-ipoid");
   if(ipoid!=null&&ipoid!=""){
    this.ac4service.findOneInAll2(parseInt(ipoid))
  
      .subscribe(
  
       data => {
  
        this.ipodetails =data;
  
        this.ipodetailssaveform.setValue(this.ipodetails);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }
  }



  ipodetailssaveform=new FormGroup({



  ipoid:new FormControl('' , [Validators.required ] ),



  companyname:new FormControl('' , [Validators.required ] ),



  stockexchange:new FormControl('',[Validators.required]),



  pricepershare:new FormControl('',[Validators.required]),



  totalnoofshares:new FormControl('',[Validators.required]),



  opendatetime:new FormControl('',[Validators.required ])

  });







  saveIpoDetails(saveIpoDetails){



  this.ipodetails=new Ac4();

  this.ipodetails.ipoid=this.Ipoid.value;

  this.ipodetails.companyname=this.Companyname.value;

  this.ipodetails.stockexchange=this.Stockexchange.value;

  this.ipodetails.pricepershare=this.Pricepershare.value;

  this.ipodetails.totalnoofshares=this.Totalnoofshares.value;

  this.ipodetails.opendatetime=this.Opendatetime.value;



  this.submitted = true;



  this.save();



  }



  save() {



  this.ac4service.saveIpos(this.ipodetails)



   .subscribe(data => console.log(data), error => console.log(error));



  this.ipodetails = new Ac4();
   
  window.localStorage.removeItem("edit-ipoid");
  this.router.navigate(['ac4'])


  }



  get Ipoid(){



  return this.ipodetailssaveform.get('ipoid');



  }





  get Companyname(){



  return this.ipodetailssaveform.get('companyname');



  }









  get Stockexchange(){



  return this.ipodetailssaveform.get('stockexchange');



  }



  get Pricepershare(){



  return this.ipodetailssaveform.get('pricepershare');



  }



  get Totalnoofshares(){



  return this.ipodetailssaveform.get('totalnoofshares');



  }



  get Opendatetime(){



  return this.ipodetailssaveform.get('opendatetime');



  }



  saveIpoDetailsForm(){



  this.submitted=false;



  this.ipodetailssaveform.reset();



  }



 }