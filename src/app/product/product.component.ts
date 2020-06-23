import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<h2>
                <a [routerLink]="['/products/', product.id]">{{product.name}}</a>
            </h2>
            <div>Categoria: {{product.category}}</div>
            <div>Descripcion: {{product.description}}</div>
            <div>Precio: {{product.price}}</div>`
})
export class ProductComponent {
  @Input() product;
}
