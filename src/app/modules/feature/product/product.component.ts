import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public displayedColumns: string[] = ['no', 'item', 'quantity', 'price'];
  public data =  [
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' },
    { no: 1, item: 'Rice', quantity: '1kg', price: '40' }
  ];

  private subscription$;
  public dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  onSubmit() {
    this.router.navigate(['checkout']);
  }

}
