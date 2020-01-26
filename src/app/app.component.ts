import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShortenedLink } from 'src/models/shortened-link';
import { LinkService } from 'src/services/link-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shortly';
  linkToShorten = '';
  shortenedLinks: ShortenedLink[];

  constructor(private linkService: LinkService ) {
    const links =  JSON.parse(localStorage.getItem('links'));
    this.shortenedLinks = links || [];
  }

  getShortenedLink() {
    this.linkService
      .getShortenedUrl(this.linkToShorten)
      .subscribe(link => {
        if (!this.shortenedLinks.find(x => x.new === link.new)) {
           this.shortenedLinks.push(link); // maybe show toaster to indicate duplicate value?
           localStorage.setItem('links', JSON.stringify(this.shortenedLinks));
        }
      });
  }
}
