import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMapComponent } from './user-map.component';

describe('UserMapComponent', () => {
  let component: UserMapComponent;
  let fixture: ComponentFixture<UserMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
