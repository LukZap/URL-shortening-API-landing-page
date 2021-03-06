import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from 'src/components/card/card.component';
import { FooterItemComponent } from 'src/components/footer-item/footer-item.component';
import { ShortenedLinkComponent } from 'src/components/shortened-link/shortened-link.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkService } from 'src/services/link-service.service';
import { ClipboardModule } from 'ngx-clipboard';
import { HeaderComponent } from './header/header.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { SearchComponent } from './search/search.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterItemComponent,
    ShortenedLinkComponent,
    HeaderComponent,
    TopSectionComponent,
    SearchComponent,
    AdvancedComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
