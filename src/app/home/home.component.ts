import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clicked = false;
  title = "Bottone matto"
  matti = [{name: "Cicoria",
            epithet: "er tossigo"},
           {name: "Giacomo",
            epithet: "pazzo scatenato"},];

  clickingIt() {
    this.clicked = true;
    this.title = "Bottone tranquillo...";
  }
}
