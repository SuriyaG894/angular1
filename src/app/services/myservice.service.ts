import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService 
{
  // mydatas:any;
  addeditem:any;
  constructor(private http:HttpClient) { }
// postdata(val:any)
// {
//   return this.http.post('https://6149f6b807549f001755a71f.mockapi.io/suriya',val);
// }
// getdata()
// {
//   return this.http.get('https://6149f6b807549f001755a71f.mockapi.io/suriya');
// }
postlistitem(additem:any)
{
  console.log(additem);
  return this.http.post('https://614c80a259e92d00176ad2ba.mockapi.io/todo',{addeditem:additem});
}
getTodoList()
{
  return this.http.get('https://614c80a259e92d00176ad2ba.mockapi.io/todo');
}
}
