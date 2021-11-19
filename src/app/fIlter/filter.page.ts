import { Router }                   from '@angular/router';
import { ParkingService }           from './../services/Parking.service';
import { Component }                from '@angular/core';
import { CurrencyMaskConfig }       from 'ngx-currency/src/currency-mask.config';
import { NativePageTransitions,
         NativeTransitionOptions  } from '@ionic-native/native-page-transitions/ngx';
import { FilterResultPage }         from '../filter-result/filter-result.page';
import { NavController }            from '@ionic/angular';
import { Filter }                   from '../interfaces/Parking';

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
  public filterValues: Filter = {};

  constructor(private transition: NativePageTransitions,
              private navCtrl: NavController,
              private _parkingService: ParkingService,
              private router: Router
  ) {}

  ngOnInit() {
    this.initFilterValues();
  }

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

   public initFilterValues() {
     this.filterValues.name = '';
     this.filterValues.price = 0;
     this.filterValues.user_avaliation = 0;
   }

  public filter() {
    let param: any = {
        "currentRate" : this.currentRate,
        "minValue": this.minValue,
        "maxValue": this.maxValue,
        "parkingNameSearch": this.parkingNameSearch
    }
    this._parkingService.filter(param).subscribe(results => {
        this.router.navigate(['/filter-result', {parkings: results}]);
    })
  }

  public showResults() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.transition.slide(options);
    this.navCtrl.navigateForward('/filter-result');
  }

}
