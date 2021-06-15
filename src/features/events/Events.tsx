/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getEventsAsync,
  toggleEntry,
} from './eventsSlice';
import {
  selectRows,
} from './eventSelectors'
import { Button, Container } from '@material-ui/core';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';

export function Events() {
  const rows = useAppSelector(selectRows);
  const dispatch = useAppDispatch();
  const onToggleEntry = useCallback((params: GridCellParams) => {
    dispatch(toggleEntry(params.row.id));
  }, [dispatch]);
  const columns: GridColDef[] = useMemo<GridColDef[]>(() => [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'live', headerName: 'Live', width: 180 },
    { field: 'matchSeries', headerName: 'Match Series', width: 90 },
    { field: 'tournamentName', headerName: 'Tournament Name', width: 200 },
    { field: 'winningsPrizePoolAmount', headerName: 'Winnings Prize Pool Amount', width: 100 },
    { field: 'bonusPrizePoolAmount', headerName: 'Bonus Prize Pool Amount', width: 100 },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      width: 220,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Button color="primary" onClick={() => onToggleEntry(params)}>
            {params.row.isEntry ? "Remove from Entries" : "Add to Entries"}
          </Button>
        )
      }
    }
  ], [onToggleEntry]);
  useEffect(() => {
    dispatch(getEventsAsync())
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <div style={{ height: 700 }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
      </div>
    </Container>
  );
}
