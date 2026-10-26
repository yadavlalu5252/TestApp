import { ChangeDetectorRef, Component } from '@angular/core';
import { EmpService } from '../emp-service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
declare var $:any;

@Component({
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-api',
  styleUrl: './api.scss',
  templateUrl: './api.html',
})
export class Api {
  constructor(private service:EmpService,private cd:ChangeDetectorRef)
  {
    this.getAllEmp();
    this.getAllManagers();
  }

  emps=new FormGroup({
    eid:new FormControl(''),
    ename:new FormControl(''),
    esalary:new FormControl(''),
    mid:new FormControl(''),
  });

  allemps:any;
  getAllEmp()
  {
    this.service.getEmployees().subscribe({
      next:res=>{
        console.log(res);
        this.allemps=res.data;
        this.cd.detectChanges();
      },
      error:err=>{
        console.log(err);
      }
    });
  }

  allmanagers:any;
  getAllManagers()
  {
    this.service.getmanagers().subscribe({
      next:res=>{
        this.allmanagers=res.mydata;
      },
      error:err=>{
        console.log(err);
      }
    });
  }

  SaveEmp(data:any)
  {
    this.service.AddEmp(data).subscribe({
      next:res=>{
        alert(res.message);
        $("#exampleModal").modal('hide');
        this.getAllEmp();
      },
      error:err=>{
        console.log(err);
      }
    });
  }

  DelEmp(id:any)
  {
    if(confirm("Are You Sure?"))
    {
        this.service.DeleteEmp(id).subscribe({
          next:res=>{
            alert(res.message);
            this.getAllEmp();
          },
          error:err=>{
            console.log(err);
          }
        });
    }
    else
    {
      alert("It is Ok");
    }
  }

  EditEmp(id:any)
  {
      this.service.EditEmp(id).subscribe({
        next:res=>{
          $("#exampleModal2").modal('show');
          console.log(res.eid);
          this.emps.controls.eid.setValue(res.eid);
          this.emps.controls.ename.setValue(res.ename);
          this.emps.controls.esalary.setValue(res.esalary);
          this.emps.controls.mid.setValue(res.mid);
        },
        error:err=>{
          console.log(err);
        }
      })
  }

  UpdateEmp(data:any)
  {
    this.service.UpdateEmp(data).subscribe({
      next:res=>{
        alert(res.message);
        $("#exampleModal2").modal('hide');
        this.getAllEmp();
      },
      error:err=>{
        console.log(err);
      }
    });
  }
}
