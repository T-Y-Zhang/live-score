import { createSelector } from 'reselect'
import { RootState } from '../../app/store';
import { IEvent, IEventRow } from './types'

export const selectEvents: (state: RootState) => IEvent[] = (state: RootState) => state.events.data;

export const selectNumOfEntries = createSelector<RootState, IEvent[], number>(
  (state) => selectEvents(state),
  (events) => events.filter((event) => event.isEntry).length
);

export const selectRows = createSelector<RootState, IEvent[], IEventRow[]>(
  (state) => selectEvents(state),
  (events) => events.map<IEventRow>((event) => {
    return {
      id: event.id,
      name: event.name,
      status: event.eventStatus,
      live: event.goLiveAt,
      matchSeries: event.matchSeries,
      tournamentName: event.tournament.name,
      winningsPrizePoolAmount: event.prizePools.winningsPrizePoolAmount,
      bonusPrizePoolAmount: event.prizePools.bonusPrizePoolAmount,
      isEntry: event.isEntry
    }
  })
);
