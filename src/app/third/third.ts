import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-third',
  styleUrl: './third.scss',
  templateUrl: './third.html',
})
export class Third {
  
  col:any;
  
  mydata:any;
  getData(name:any)
  {
    this.mydata=name;
  }

  fno:any;
  sno:any;
  choice:any;
  res:any;
  Calci()
  {
    if(this.choice=='+')
    {
      this.res=this.fno+this.sno;
    }
    else if(this.choice=='-')
    {
      this.res=this.fno-this.sno;
    }
    else
    {
      this.res=this.fno*this.sno;
    }
  }
}
