import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatchResponse, TeamResponse } from '../../modal/teams.modal';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly BASE_URL = 'https://free-nba.p.rapidapi.com';

  dates: string[] = [];

  constructor(private http: HttpClient) {
    this.calculateDates();
  }

  calculateDates() {
    let today = new Date();
    let auxDate = structuredClone(today);
    for (let i = 0; i < 12; i++) {
      auxDate.setDate(auxDate.getDate() - 1);
      this.dates.push(auxDate.toISOString().split('T')[0]);
    }
  }

  getTeamsRequest(page: number = 1): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(this.BASE_URL + '/teams', {
      headers: {
        'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
      params: {
        page: page,
      },
    });
  }

  getLastResults(id: number = 0): Observable<MatchResponse> {
    return this.http.get<MatchResponse>(this.BASE_URL + '/games', {
      headers: {
        'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
      params: {
        page: 0,
        dates: this.dates,
        per_page: 12,
        team_ids: [id],
      },
    });
  }

}
