import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-first',
  styleUrl: './first.scss',
  templateUrl: './first.html',
})
export class First {
    name="Masstech Business Solution";

    arr=[10,20,30]

    obj={
      id:101,
      name:'Shubhu',
      salary:5000000
    }

    arrobj=[
      {id:101,name:'Shubhu'},
      {id:102,name:'Abhishek'},
      {id:103,name:'Shubham'}
    ]
}
