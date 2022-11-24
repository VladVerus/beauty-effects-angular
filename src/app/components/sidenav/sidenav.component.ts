import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  @ViewChild('drawer', { static: false })
  drawer: MatDrawer | undefined;
  toggleSidenav() {
    this.drawer?.toggle();
  }
  ngOnInit(): void {}
}
