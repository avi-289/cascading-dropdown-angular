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

  getServices() {
    return [
      { serviceId: 'A', subCatId: 1, catId: 1, subCatName: 'Arizona' },
      { serviceId: 'E', subCatId: 1, catId: 1, subCatName: 'Arizona' },
      { serviceId: 'O', subCatId: 2, catId: 1, subCatName: 'Alaska' },
      { serviceId: 'I', subCatId: 3, catId: 1, subCatName: 'Florida' },
      { serviceId: 'U', subCatId: 3, catId: 1, subCatName: 'Florida' },
      { serviceId: 'B', subCatId: 4, catId: 1, subCatName: 'Hawaii' },
      { serviceId: 'C', subCatId: 5, catId: 2, subCatName: 'Sao Paulo' },
      { serviceId: 'D', subCatId: 5, catId: 2, subCatName: 'Sao Paulo' },
      { serviceId: 'M', subCatId: 5, catId: 2, subCatName: 'Sao Paulo' },
      { serviceId: 'F', subCatId: 6, catId: 2, subCatName: 'Rio de Janeiro' },
      { serviceId: 'G', subCatId: 7, catId: 2, subCatName: 'Minas Gerais' },
      { serviceId: 'H', subCatId: 7, catId: 2, subCatName: 'Minas Gerais' },
    ];
  }
}
