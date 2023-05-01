import { Injectable } from '@angular/core';
import { Match, Team } from 'src/app/modal/teams.modal';

@Injectable({
  providedIn: 'root',
})
export class SaveListService {
  teamList: Team[] = [];
  teamMatches: Match[] = [];

  constructor() {}

  setList(list: Team[]) {
    this.teamList = list;
  }

  getList() {
    return this.teamList;
  }

  setScores(list: Match[]) {
    this.teamMatches = list;
  }

  getScores() {
    return this.teamMatches;
  }
}
