import { NgModule }                        from '@angular/core';
import { MatTabsModule  }                  from "@angular/material/tabs";
import { MatAutocompleteModule }           from "@angular/material/autocomplete";
import { MatDividerModule}                 from '@angular/material/divider';
import { MatInputModule }                  from '@angular/material/input';
import { MatFormFieldModule }              from '@angular/material/form-field';
import { MatIconModule }                   from '@angular/material/icon';
import { MatButtonModule }                 from '@angular/material/button';
import { MatCheckboxModule }               from '@angular/material/checkbox';
import { MatSelectModule }                 from '@angular/material/select';
import { MatChipsModule }                  from '@angular/material/chips';
import { MatDatepickerModule }             from '@angular/material/datepicker';
import { MatNativeDateModule }             from '@angular/material/core';
import { MatMomentDateModule }             from '@angular/material-moment-adapter';
import { MatProgressSpinnerModule }        from '@angular/material/progress-spinner';


@NgModule({
  exports: [
     MatTabsModule,
     MatAutocompleteModule,
     MatDividerModule,
     MatInputModule,
     MatFormFieldModule,
     MatIconModule,
     MatButtonModule,
     MatCheckboxModule,
     MatSelectModule,
     MatChipsModule,
     MatDatepickerModule,
     MatNativeDateModule, 
     MatMomentDateModule,
     MatProgressSpinnerModule
    ],
 
})
export class MaterialModule { }
