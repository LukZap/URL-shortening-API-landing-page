import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shortened-link',
  templateUrl: './shortened-link.component.html',
  styleUrls: ['./shortened-link.component.scss']
})
export class ShortenedLinkComponent implements OnInit {

  @Input() original: string;
  @Input() new: string;
  @Input() copied: boolean;

  constructor() { }

  ngOnInit() {
  }

}
