import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsPageComponent } from './team-results-page.component';

describe('TeamResultsPageComponent', () => {
  let component: TeamResultsPageComponent;
  let fixture: ComponentFixture<TeamResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamResultsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
