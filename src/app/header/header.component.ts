import { Component, OnInit } from '@angular/core';
import { style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('100ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({ opacity: 0}))
        ])
      ]
    )
  ],
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit() {
    setInterval(() =>  console.log(this.showMenu), 1000);
  }

}
