import { Component, OnInit } from '@angular/core';
import { SelectService } from './select.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  selectedCategory: { catId: number; catName: string } = {
    catId: 1,
    catName: 'USA',
  };
  categories: any[];
  subCategories: any[];
  constructor(private selectService: SelectService) {}

  ngOnInit() {
    this.categories = this.selectService.getCategories();
    this.onSelect(this.selectedCategory.catId);
  }

  onSelect(catId) {
    this.subCategories = this.selectService
      .getSubCategories()
      .filter((item) => item.catId == catId);
    this.selectedCategory = this.selectService
      .getCategories()
      .filter((item) => item.catId == catId)[0];
    console.log(this.subCategories);
  }
}
