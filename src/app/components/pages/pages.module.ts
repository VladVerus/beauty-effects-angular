import { NgModule } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';
import { OverviewComponent } from './overview/overview.component';

import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [MatSelectModule, CommonModule],
  declarations: [OverviewComponent, ConverterComponent],
  exports: [OverviewComponent, ConverterComponent],
})
export class PagesModule {}
