import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //employee class instance
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      // REDIRECT TO EMPLOYEE LIST
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    // TO CHECK THAT THE FORM IS SUBMITTING
    console.log("EMPLOYEE INPUT", this.employee);
    this.saveEmployee();
  }

}
