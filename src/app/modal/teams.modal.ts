
export interface Team {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
};

export interface DropdownTeamOption {
    id: string;
    label: string;
}

export interface TeamResponse {
  data: Team[];
  meta: Meta;
};

export interface MatchResponse {
  data: Match[];
  meta: Meta;
};

export interface Meta {
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
}

export interface Match {
  date: string;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  id: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
};