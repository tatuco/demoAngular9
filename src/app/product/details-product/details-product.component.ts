import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  public product: any = {};

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private location: Location) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataService.getProductById(productId);
    console.log('ProductId ', productId);
  }

  onGoBack(): void {
    this.location.back();
  }

}
