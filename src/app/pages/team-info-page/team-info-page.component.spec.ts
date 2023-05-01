import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoPageComponent } from './team-info-page.component';

describe('TeamInfoPageComponent', () => {
  let component: TeamInfoPageComponent;
  let fixture: ComponentFixture<TeamInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
