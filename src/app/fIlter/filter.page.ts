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


  constructor() {}

}
