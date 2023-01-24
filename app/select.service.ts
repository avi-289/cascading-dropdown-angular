import { Injectable } from '@angular/core';
import { Category } from './Category';
import { SubCategory } from './SubCategory';

@Injectable()
export class SelectService {
  getCategories() {
    return [new Category(1, 'USA'), new Category(2, 'Brazil')];
  }

  getSubCategories() {
    return [
      new SubCategory(1, 1, 'Arizona'),
      new SubCategory(2, 1, 'Alaska'),
      new SubCategory(3, 1, 'Florida'),
      new SubCategory(4, 1, 'Hawaii'),
      new SubCategory(5, 2, 'Sao Paulo'),
      new SubCategory(6, 2, 'Rio de Janeiro'),
      new SubCategory(7, 2, 'Minas Gerais'),
    ];
  }

  getServices() {
    return [];
  }
}
