import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownTeamOption, Team, TeamResponse } from '../../modal/teams.modal';
import { ApiService } from '../../services/api/api.service';
import { SaveListService } from '../../services/save-list/save-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-team-info-page',
  templateUrl: './team-info-page.component.html',
  styleUrls: ['./team-info-page.component.scss'],
})
export class TeamInfoPageComponent implements OnInit, OnDestroy {
  readonly firstPage: number = 1;

  select = new FormControl<string>('');

  teamData: Team[] = [];
  teamList: Team[] = [];
  dropdownOptions: DropdownTeamOption[] = [];

  isReady: boolean = false;

  constructor(private api: ApiService, private listService: SaveListService) {
  }

  ngOnInit(): void {
    this.retrieveTeams(this.firstPage);
    this.teamList = this.listService.getList();
  }

  retrieveTeams(page: number): void {
    this.api.getTeamsRequest(page).subscribe({
      next: (value: TeamResponse) => {
        this.loadData(value.data);
        if (value.meta.next_page !== null) {
          this.retrieveTeams(value.meta.next_page);
        } else {
          this.select.patchValue(this.teamData[0].abbreviation);
          this.isReady = true;
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  loadData(data: Team[]): void {
    data.forEach((team: Team) => {
      this.dropdownOptions.push({
        id: team.abbreviation,
        label: team.full_name,
      });
    });
    const dataMap = data.map((team: Team) => {
      const trimmedConference = team.conference.trim();
      if (trimmedConference && trimmedConference !== '') {
        team.conference = team.conference === 'East' ? 'Eastern' : 'Western';
      }
      return team;
    });
    this.teamData = this.teamData.concat(dataMap);
  }

  trackEvent(): void {
    const team = this.teamData.find(
      (team: Team) => team.abbreviation === this.select.value
    );
    if (team) {
      this.teamList.push(team);
    }
  }

  closeCard(index: number) : void {
    this.teamList.splice(index, 1);
  }

  ngOnDestroy() : void {
    this.listService.setList(this.teamList);
  }
}
