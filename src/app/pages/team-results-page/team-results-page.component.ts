import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../modal/teams.modal';
import { SaveListService } from '../../services/save-list/save-list.service';

@Component({
  selector: 'app-team-results-page',
  templateUrl: './team-results-page.component.html',
  styleUrls: ['./team-results-page.component.scss'],
})
export class TeamResultsPageComponent implements OnInit {
  team?: Team;

  constructor(private routing: ActivatedRoute, private list: SaveListService) {
  }

  ngOnInit(): void {
      const code = this.routing.snapshot.params['teamCode'];
      const list = this.list.getList();
      this.team = list.find((team) => team.abbreviation === code);
  }

  
}
