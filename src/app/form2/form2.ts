import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule,CommonModule],
  selector: 'app-form2',
  styleUrl: './form2.scss',
  templateUrl: './form2.html',
})
export class Form2 {
  emps=new FormGroup({
    ename:new FormControl(''),
    email:new FormControl(''),
    econtact:new FormControl('')
  });

  getData(data:any)
  {
    console.log(data);
  }
}
