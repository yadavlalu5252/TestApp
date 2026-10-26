import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-fourth',
  styleUrl: './fourth.scss',
  templateUrl: './fourth.html',
})
export class Fourth {
  con=true;

  arrobj=[
      {id:101,name:'Shubhu',salary:5000},
      {id:102,name:'Abhishek',salary:5000},
      {id:103,name:'Shubham',salary:5000}
    ]

}
