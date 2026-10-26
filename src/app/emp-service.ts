import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class EmpService {
    http=inject(HttpClient);

    url="http://localhost:5251/api/Employee/GetE";
    getEmployees()
    {
        return this.http.get<any>(this.url);
    }

    url2="http://localhost:5251/api/Employee/GetM";
    getmanagers()   
    {
        return this.http.get<any>(this.url2);
    }

    url3="http://localhost:5251/api/Employee/AddE";
    AddEmp(data:any)
    {
        return this.http.post<any>(this.url3,data);
    }

    url4="http://localhost:5251/api/Employee/DelE";
    DeleteEmp(empid:any)
    {
        return this.http.delete<any>(`${this.url4}/${empid}`);
    }

    url5="http://localhost:5251/api/Employee/Getid";
    EditEmp(empid:any)
    {
        return this.http.get<any>(`${this.url5}/${empid}`);
    }

    url6="http://localhost:5251/api/Employee/Update"
    UpdateEmp(data:any)
    {
        return this.http.put<any>(this.url6,data);
    }

    
}
