import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { map } from 'rxjs/operators';
import { ShortenedLink } from 'src/models/shortened-link';


@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private apiUrl: string;
  private linkBase: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.linkBase = environment.apiUrl;
  }

  // catch errs
  getShortenedUrl(originalUrl: string) {
    return this.http
      .post<any>(this.apiUrl, { url: originalUrl })
      .pipe(map(res => {
        const link = new ShortenedLink();
        link.new = `${this.linkBase}${res.hashid}`;
        link.original = res.url;
        return link;
      }));
  }
}
