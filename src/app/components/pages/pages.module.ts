import { NgModule } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';
import { OverviewComponent } from './overview/overview.component';

import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [OverviewComponent, ConverterComponent],
  exports: [OverviewComponent, ConverterComponent],
})
export class PagesModule {}
