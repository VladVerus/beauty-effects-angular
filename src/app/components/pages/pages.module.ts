import { NgModule } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';
import { OverviewComponent } from './overview/overview.component';

import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [MatSelectModule, CommonModule, MatButtonModule],
  declarations: [OverviewComponent, ConverterComponent],
  exports: [OverviewComponent, ConverterComponent],
})
export class PagesModule {}
