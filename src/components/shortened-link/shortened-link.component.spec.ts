import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedLinkComponent } from './shortened-link.component';

describe('ShortenedLinkComponent', () => {
  let component: ShortenedLinkComponent;
  let fixture: ComponentFixture<ShortenedLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenedLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
