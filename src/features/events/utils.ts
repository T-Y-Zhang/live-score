import {IEvent, EEventStatus} from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertEventApiData2IEventsArray(data: Array<any>): IEvent[] {
  return data.map<IEvent>((element, index) => ({
    id: index,
    name: element.name,
    eventID: element.eventID,
    eventStatus: element.eventStatus,
    goLiveAt: element.goLiveAt,
    sport: {  
      sportID: element.sport.sportID,
      name: element.sport.name,
      abbreviation: element.sport.abbreviation,
      imageUrl: element.sport.imageUrl,
    },
    tournament: {
      tournamentID: element.tournament.tournamentID,
      name: element.tournament.name,
      stage: element.tournament.stage, 
    },
    prizePools: {  
      winningsPrizePoolAmount: element.prizePools.winningsPrizePoolAmount,
      bonusPrizePoolAmount: element.prizePools.bonusPrizePoolAmount,
    },
    matchSeries: element.matchSeries,
    isEntry: false,
  }));
}