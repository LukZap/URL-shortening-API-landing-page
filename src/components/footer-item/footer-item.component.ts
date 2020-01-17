import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent implements OnInit {

  @Input() title: string;
  @Input() listItems: string[];

  constructor() { }

  ngOnInit() {
  }

}
