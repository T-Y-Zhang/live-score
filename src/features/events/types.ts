export enum EEventStatus {
  LIVE,
  PUBLISHED
}
export interface ISport {
  sportID: string;
  name: string;
  abbreviation: string;
  imageUrl: string;
}
export interface ITournament {
  tournamentID: number;
  name: string;
  stage: string;
}
export interface IPrizePools {
  winningsPrizePoolAmount: number,
  bonusPrizePoolAmount: number
}
export interface IEvent {
  name: string;
  eventID: string;
  eventStatus: EEventStatus;
  goLiveAt: Date;
  sport: ISport;
  tournament: ITournament;
  prizePools: IPrizePools;
  matchSeries: string;
  isEntry: boolean;
}

export interface IEventRow {
  id: string;
  name: string;
  status: EEventStatus;
  live: Date;
  matchSeries: string;
  tournamentName: string;
  winningsPrizePoolAmount: number;
  bonusPrizePoolAmount: number;
  isEntry: boolean;
}