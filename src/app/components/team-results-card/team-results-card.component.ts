import { Component, Input, OnInit } from '@angular/core';
import { Match, Team } from 'src/app/modal/teams.modal';
import { SaveListService } from 'src/app/services/save-list/save-list.service';

@Component({
  selector: 'app-team-results-card',
  templateUrl: './team-results-card.component.html',
  styleUrls: ['./team-results-card.component.scss'],
})
export class TeamResultsCardComponent implements OnInit {
  @Input() team?: Team;

  resultList: Match[] = [];

  constructor(private list: SaveListService) {}

  ngOnInit(): void {
    this.resultList = structuredClone(this.list.getScores());
  }
}
