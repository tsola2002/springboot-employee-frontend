import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    // console.log("EMPLOYEE LIST", this.employees);

    // DUMMY LIST POPULATION
    // this.employees = [{
    //   "ID": 1,
    //   "FIRSTNAME": "Sholly",
    //   "LASTNAME": "Sobotie",
    //   "EMAILID": "sholly@gmail.com",
    // },
    //   {
    //   "ID": 2,
    //   "FIRSTNAME": "Laju",
    //   "LASTNAME": "Sobotie",
    //   "EMAILID": "laju@gmail.com",
    // }
    // ];

  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log("EMPLOYEE LIST2", this.employees);
    });
  }

}
