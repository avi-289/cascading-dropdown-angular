import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { SelectService } from './select.service';
import { SubCategory } from './SubCategory';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  selectedCountry: Category = new Category(2, 'Brazil');
  countries: Category[];
  states: SubCategory[];

  constructor(private selectService: SelectService) {}

  ngOnInit() {
    this.countries = this.selectService.getCategories();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.states = this.selectService
      .getSubCategories()
      .filter((item) => item.catId == countryid);
  }
}
