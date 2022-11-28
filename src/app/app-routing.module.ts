import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './components/pages/converter/converter.component';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './components/pages/overview/overview.component';

export const routes: Routes = [
  { path: '', component: ConverterComponent, title: 'Curency coverter' },
  { path: 'overview', component: OverviewComponent, title: 'To do list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
