import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOfSelectedPostComponent } from './data-of-selected-post.component';

describe('DataOfSelectedPostComponent', () => {
  let component: DataOfSelectedPostComponent;
  let fixture: ComponentFixture<DataOfSelectedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataOfSelectedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOfSelectedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
