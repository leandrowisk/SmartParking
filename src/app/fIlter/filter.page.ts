import { Component }            from '@angular/core';
import { CurrencyMaskConfig }   from 'ngx-currency/src/currency-mask.config';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.page.html',
  styleUrls: ['filter.page.scss']
})
export class FilterPage {
  
  public selected: string = 'zona leste';
  currentRate: number = 0;
  public minValue: number = 0;
  public maxValue: number = 0;
  public parkingNameSearch: string = '';

  public subtractMinValue() {
    if (this.minValue>=10)
      this.minValue = this.minValue + -10;
  }

  public addMinValue() {
    this.minValue = this.minValue + 10;
  }

  public subtractMaxValue() {
    if (this.maxValue>=10)
      this.maxValue = this.maxValue -10;
  }

  public addMaxValue() {
    this.maxValue = this.maxValue + 10;
  }
  
  
  constructor() {}

}
