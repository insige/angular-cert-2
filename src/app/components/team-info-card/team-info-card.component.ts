import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Match, Team, MatchResponse } from '../../modal/teams.modal';
import { ApiService } from '../../services/api/api.service';
import { SaveListService } from '../../services/save-list/save-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-team-info-card',
  templateUrl: './team-info-card.component.html',
  styleUrls: ['./team-info-card.component.scss'],
})
export class TeamInfoCardComponent implements OnInit {
  @Input() team!: Team;
  @Output() closeCard: EventEmitter<void> = new EventEmitter();

  url: string = '';
  idButton: string = '';
  avgScored: string = '-';
  avgConceded: string = '-';
  sumScored = 0;
  sumConceded = 0;

  teamMatches: Match[] = [];
  ResultsList: string[] = [];

  constructor(
    private router: Router,
    private api: ApiService,
    private list: SaveListService
  ) {}

  ngOnInit(): void {
    this.url = `https://interstate21.com/nba-logos/${this.team.abbreviation}.png`;
    this.idButton = 'results' + this.team.abbreviation;
    this.api.getLastResults(this.team.id).subscribe({
      next: (value: MatchResponse) => {
        this.calculateLastScores(this.team.abbreviation, value.data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  closeEvent(): void {
    this.closeCard.emit();
  }

  navigateToPage(): void {
    this.list.setScores(this.teamMatches);
    this.router.navigate(['/results', this.team.abbreviation]);
  }

  calculateLastScores(abbreviation: string, data: Match[]): void {
    this.teamMatches = data.filter(
      (match: Match) =>
        match.home_team.abbreviation === abbreviation ||
        match.visitor_team.abbreviation === abbreviation
    );
    for (let match of this.teamMatches) {
      const result = match.home_team_score > match.visitor_team_score;
      if (match.home_team.abbreviation === abbreviation) {
        this.sumScored += match.home_team_score;
        this.sumConceded += match.visitor_team_score;
        this.ResultsList.push(result ? 'W' : 'L');
      } else {
        this.sumScored += match.visitor_team_score;
        this.sumConceded += match.home_team_score;
        this.ResultsList.push(result ? 'L' : 'W');
      }
    }
    if (this.teamMatches.length > 0) {
      this.avgScored = (this.sumScored / this.teamMatches.length)
        .toFixed(2)
        .toString();
      this.avgConceded = (this.sumConceded / this.teamMatches.length)
        .toFixed(2)
        .toString();
    }
  }
}
