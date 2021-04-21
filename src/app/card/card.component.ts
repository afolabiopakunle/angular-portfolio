import { Component, Input, OnInit } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  
  constructor() { }

  ngOnInit(): void {
  }

}
