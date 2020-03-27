import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public userDetailsForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userDetailsForm.value.title);
    this.apiService.createUser(this.userDetailsForm.value).subscribe((data) => {
      console.log(data);
    });
  }

}
