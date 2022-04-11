import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorqrcodeComponent } from './geradorqrcode.component';

describe('GeradorqrcodeComponent', () => {
  let component: GeradorqrcodeComponent;
  let fixture: ComponentFixture<GeradorqrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorqrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
