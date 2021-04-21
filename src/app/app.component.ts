import { Component } from '@angular/core';
import { Card } from './card/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioAfolabi';
  cards: Card[] = [{
    title: 'Complete Errands App | JavaScript & Bootstrap',
    body: 'Do you need quick services of regular daily people to help do stuffs for you?',
    href: '#'
  }];
  constructor() {
    
  }
}
