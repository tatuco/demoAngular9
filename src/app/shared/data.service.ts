import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1
    },
    {
      id: 2,
      name: 'milk',
      category: 'Food',
      description: 'Lorem milk',
      price: 200
    },
    {
      id: 3,
      name: 'sugar',
      category: 'Food',
      description: 'Lorem sugar',
      price: 12
    }
  ];

  constructor() {
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter(product => product.id == id);
  }
}
