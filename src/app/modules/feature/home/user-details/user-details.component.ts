import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../../../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public userDetailsForm = new FormGroup({
    name: new FormControl(''),
    phone1: new FormControl(''),
    phone2: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    landmark: new FormControl(''),
  });

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.apiService.createUser(this.userDetailsForm.value).subscribe((data) => {
      this.router.navigate(['product']);
    });
  }

}
