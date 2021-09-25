import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private addcall:MyserviceService) { }

  ngOnInit(): void {
  }
  title="ToDo-List";
  filter:'all'|'active'|'done'='all';
  allItems=[
    {description:'eat',done:true},
  ];
  getItem:any;
  get items()
  {
    if(this.filter==='all')
    {
      return this.allItems;
    }
    return this.allItems.filter(item=>this.filter=='done'?item.done:!item.done);
  }
addItem(description:any)
{
  this.allItems.unshift({
    description,done:false
  });
  this.addcall.postlistitem(description).subscribe();
  this.addcall.getTodoList().subscribe((data)=>{
    console.log(data);
    this.getItem=data;
  })
  
}
}
