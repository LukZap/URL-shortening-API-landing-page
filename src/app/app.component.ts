import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shortly';
  @ViewChild('menu', {static: false}) menu: ElementRef;

  showMenu() {
    this.menu.nativeElement.classList.toggle('menu--closed');
  }
}
