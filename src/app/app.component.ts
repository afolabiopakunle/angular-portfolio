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
      title: 'Human Resources App',
      body: 'Web solution that takes care of payroll, reporting, staff record and human capital management needs.',
      href: 'https://humanmanager.net'
    },
    {
      title: 'Heirs Insurance App',
      body: 'Angular 11 SPA, Simple & affordable insurance protection for everything you cherish. Motor Insurance, Life etc.',
      href: 'https://simple.heirsinsurance.com/home'
    },
    {
      title: 'Complete Errands App | JavaScript & Bootstrap',
      body: 'Do you need quick services of regular daily people to help do stuffs for you?',
      href: 'https://gofer-web-app-afolabi.surge.sh/'
    },
    // {
    //   title: 'Employee Management',
    //   body: 'Single Page Application, that implements all the rules of CRUD for effective management of employees',
    //   href: 'https://afolabiopakunle-employee-crud-app.surge.sh'
    // },
    // {
    //   title: 'Searchable Characters',
    //   body: 'Angular based searchable Harry Porter series characters list. Populates on key up and backspace',
    //   href: 'https://opakunleafolabi-angular-harry-porter-search.surge.sh'
    // },
    // {
    //   title: 'JavaScript Exams App',
    //   body: 'Multiple options questions online examination, JavaScript utilized to deliver seamless question loading and scoring',
    //   href: 'https://opakunleafolabi-exams-web-app.surge.sh'
    // },
    // {
    //   title: 'My Designs',
    //   body: 'Compilations of previous designs, concepts I delivered while freelancing as a UI/UX designer',
    //   href: 'https://dribbble.com/afolabiopakunle'
    // }
  ];

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
