import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor(private mydatacall:MyserviceService) {
    
   }
  //  mydata:any;
  ngOnInit(): void {
    // this.mydatacall.getdata().subscribe((response)=>{
    //   console.log(response)
    // });
    // this.mydata=this.mydatacall.mydatas;
  }
  // psd="";
  // nme="";
  // cpsd="";
  // fname="";
  // lname="";
  // mail="";
  // bool=true;
// Onsubmit(value:any)
// {
//   console.log(value);
//   this.mydatacall.postdata(value).subscribe((res)=>{
//     console.log(res)
//   });
// }
}
