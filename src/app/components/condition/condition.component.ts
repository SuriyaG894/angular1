import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  c=0;
  n1=0;
  n2=0;
  result=0;
  check=true;
  getinp(choice:any,num1:any,num2:any)
  {
    this.c=choice.value;
    this.n1=Number(num1.value);
    this.n2=Number(num2.value);
    if(choice>4)
    {
      this.check=false;
    }
  }
}
