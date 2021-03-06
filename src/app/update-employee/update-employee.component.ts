import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
  private route: ActivatedRoute, private router: Router) { }

  id: number;
  employee: Employee = new Employee();

  ngOnInit(): void {
    // we use activated route to retrieve id from the route
    this.id = this.route.snapshot.params['id'];
    // we use activated route to retrieve id from the route
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    // TO CHECK THAT THE FORM IS SUBMITTING
    //console.log("EMPLOYEE INPUT", this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
    },
      error => console.log(error)
    )
  } 

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
