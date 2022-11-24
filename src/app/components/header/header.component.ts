import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle } from 'src/app/reducers/sidemenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  toggleSideNav() {
    this.store.dispatch(toggle());
  }
  ngOnInit(): void {}
}
