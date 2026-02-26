import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFount } from './page-not-fount';

describe('PageNotFount', () => {
  let component: PageNotFount;
  let fixture: ComponentFixture<PageNotFount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
