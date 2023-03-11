import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  home = true;
  about = false;
  contact = false;

  homeClicked() {
    this.home = true;
    this.about = false;
    this.contact = false;
  }

  aboutClicked() {
    this.home = false;
    this.about = true;
    this.contact = false;
  }

  contactClicked() {
    this.home = false;
    this.about = false;
    this.contact = true;
  }
}
