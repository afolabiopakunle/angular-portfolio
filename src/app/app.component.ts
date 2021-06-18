import { Component } from '@angular/core';
import * as introJs from 'intro.js';
import { Card } from './card/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioAfolabi';
  cards: Card[] = [
    {
      title: 'Angular Harry Porter Searchable Characters',
      body: 'Angular based searchable Harry Porter series characters list. Populates on key up and backspace',
      href: 'https://opakunleafolabi-angular-harry-porter-search.surge.sh'
    }, 
    {
      // title: 'Angular Events Site',
      // body: 'Keep up to date with recent Angular trends and events around your city. Book, register and get notification.',
      // href: 'https://www.sportsglobaltv.com/'
      title: 'JavaScript Exams Web App',
      body: 'Multiple options questions online examination, vanilla JavaScript utilized to deliver seamless question loading and scoring',
      href: 'https://opakunleafolabi-exams-web-app.surge.sh'
    },
    {
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
      href: 'https://martinasapartments.com/',
    },
    {
      title: 'JavaScript Shopping List',
      body: 'Search enabled shopping list app, constructed with the use of   plain JavaScript with commented jQuery version included.',
      href: '#'
    },
    {
      title: 'My Designs',
      body: 'Page contains screenshots of previous designs and concepts I delivered using Figma and AdobeXD in some projects',
      href: 'https://dribbble.com/afolabiopakunle'
    }];

  intoJS = introJs();

  startIntro() {
    this.intoJS.start()
  }


  constructor() {
    this.intoJS.setOptions({
      steps: [{
        intro: "<div style='text-align: center'><h4>Hi!</h4><p>Let me show around</p></div>",
      },
      {
        element: "#step1",
        intro: "<div style='text-align: center'>Each card links to a live project!</div>",
        position: 'top',
        tooltipClass: 'special'
      },
      {
        element: "#step2",
        intro: "The name ;)",
        position: 'bottom'
      },
      {
        element: '#step3',
        intro: 'Official Accounts',
        // position: 'left',
      },
      {
        element: '#step4',
        intro: "Get in touch via email.",
        position: 'top'
      },
      {
        element: '#step5',
        intro: '<p style="text-align: center">Thanks!</p>'
      }
      ],
      "showBullets": false,
      "exitOnOverlayClick": false,
      "showProgress": true,
      "overlayOpacity": 0.7
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.intoJS.start();
    }, 4000);
  }
}
