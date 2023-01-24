import { Injectable } from '@angular/core';

@Injectable()
export class SelectService {
  getCategories() {
    return [
      { catId: 1, catName: 'USA' },
      { catId: 2, catName: 'BRAZIL' },
    ];
  }

  getSubCategories() {
    return [
      { subCatId: 1, catId: 1, subCatName: 'Arizona' },
      { subCatId: 2, catId: 1, subCatName: 'Alaska' },
      { subCatId: 3, catId: 1, subCatName: 'Florida' },
      { subCatId: 4, catId: 1, subCatName: 'Hawaii' },
      { subCatId: 5, catId: 2, subCatName: 'Sao Paulo' },
      { subCatId: 6, catId: 2, subCatName: 'Rio de Janeiro' },
      { subCatId: 7, catId: 2, subCatName: 'Minas Gerais' },
    ];
  }
}
