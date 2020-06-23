import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getAllProducts();
  }

}
