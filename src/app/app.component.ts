import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  name="Suriya Ganesh";
  fn="";
  ln="";
  m="";
  p="";
  cp="";
  bool=true;
  print_val(fname:any,lname:any,mail:any,pass:any,cpass:any)
  {
      this.fn=fname.value;
      this.ln=lname.value;
      this.m=mail.value;
      this.p=pass.value;
      this.cp=cpass.value;
  }
}
