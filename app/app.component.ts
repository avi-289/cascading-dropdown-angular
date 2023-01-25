import { Component, OnInit } from '@angular/core';
import { SelectService } from './select.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categories: any[];
  services: any[];
  subCategories: any[];
  selectedCategory: any;
  selectedSubCategory: any;
  selectedSubCategories: any[];
  selectedServices: any[] = [];
  constructor(private selectService: SelectService) {}

  ngOnInit() {
    this.services = this.selectService.getServices();
    this.categories = this.selectService.getCategories();
    this.subCategories = this.selectService.getSubCategories();
    this.onSelect(this.selectedCategory.catId);
    this.onSelectSubCat(this.selectedSubCategory.subCatId);
  }

  onSelect(catId) {
    this.selectedSubCategories = this.subCategories.filter(
      (item) => item.catId == catId
    );
    this.selectedCategory = this.categories.filter(
      (item) => item.catId == catId
    )[0];
    this.selectedServices = [];
    console.log(this.selectedSubCategories);
  }
  onSelectSubCat(subCatId) {
    this.selectedSubCategory = this.subCategories.filter(
      (item) => item.subCatId == subCatId
    )[0];
    this.setServices(
      this.selectedCategory.catId,
      this.selectedSubCategory.subCatId
    );
  }
  setServices(catId, subCatId) {
    this.selectedServices = this.services.filter(
      (item) => item.catId == catId && item.subCatId == subCatId
    );
    console.log(this.services);
  }
}
