import { metaReducers, reducers } from './reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { PagesModule } from './components/pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,

    HttpClientModule,
    //? AngularMaterial
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,

    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
