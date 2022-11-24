import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [OverviewComponent, HomeComponent],
  exports: [OverviewComponent, HomeComponent],
})
export class PagesModule {}
