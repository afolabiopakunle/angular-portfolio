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
  },
  {
    title: 'Playstore App Landing Page',
    body: 'Landing page design has evolved over a short period of time. This design is modern and ageless.',
    href: '#'
  },
  {
    title: 'Hotel Booking Website',
    body: 'This website is targeted at converting visitors to book an apartment with Martinas.',
    href: '#',
  },
  {
    title: 'Sports Website Project',
    body: 'Adrenalined filled sports webpage with trendy color selection and user-friendly backend cms functionalities.',
    href: '#'
  },
  {
    title: 'JavaScript Shopping List',
    body: 'Search enabled shopping list app, constructed with the use of   plain JavaScript with commented jQuery version included.',
    href: '#'
  },
{
  title: 'My Designs',
  body: 'Page contains screenshots of previous designs and concepts I delivered using Figma and AdobeXD in some projects',
  href: '#'
}];
  constructor() {

  }
}
