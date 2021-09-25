import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  detailform= new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    mail:new FormControl(),
    psd:new FormControl(),
    cpsd:new FormControl()});
  constructor() { }
  Onsubmit(detailform:any):void{
    console.log(this.detailform.value);
  }
  public Yourname="";
  ngOnInit(): void 
  {
    
    
  }
//   Onsubmit(value:any)
// {
//   console.log(value);
// }
// reset(userform :any) {
//   userform.resetForm();
// }

}
