import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopOnline';

  constructor(private router: Router) {

  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  navigateProduct() {
    this.router.navigate(['product']);
  }

  navigateSummary() {
    this.router.navigate(['checkout']);
  }

}
