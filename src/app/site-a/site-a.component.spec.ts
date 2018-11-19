import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAComponent } from './site-a.component';

describe('SiteAComponent', () => {
  let component: SiteAComponent;
  let fixture: ComponentFixture<SiteAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
