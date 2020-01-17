import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() icon: string;
  @Input() cardTitle: string;

  iconPath: string;

  constructor() { }

  ngOnInit() {
    this.iconPath = `../assets/images/${this.icon}.svg`;
  }

}
