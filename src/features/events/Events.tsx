/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useMemo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid, GridCellParams, GridColDef, GridSelectionModelChangeParams } from '@material-ui/data-grid';
import { Button, Container, makeStyles } from '@material-ui/core';

import { useCommonStyles } from './../../app/theme';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getEventsAsync,
  toggleEntry,
  setEntries,
} from './eventsSlice';
import {
  selectRows,
  selectEntryIds,
  selectEventsStatus
} from './eventSelectors'

const useStyles = makeStyles(({ spacing }) => ({
  gridContainer: {
    height: 700, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
}));

export default function Events() {
  const rows = useAppSelector(selectRows);
  const commonStyle = useCommonStyles();
  const styles = useStyles();
  const entryIds = useAppSelector<string[]>(selectEntryIds);
  const eventsStatus = useAppSelector(selectEventsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEventsAsync())
  }, [dispatch]);

  const onToggleEntry = useCallback((params: GridCellParams) => {
    dispatch(toggleEntry(params.row.id));
  }, [dispatch]);
  const columns: GridColDef[] = useMemo<GridColDef[]>(() => [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'live', headerName: 'Live', width: 180 },
    { field: 'matchSeries', headerName: 'Match Series', width: 90 },
    { field: 'tournamentName', headerName: 'Tournament Name', width: 200 },
    { field: 'winningsPrizePoolAmount', headerName: 'Winnings Prize Pool Amount', width: 90 },
    { field: 'bonusPrizePoolAmount', headerName: 'Bonus Prize Pool Amount', width: 90 },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      width: 230,
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
  const onSelectionModelChange = useCallback<(param: GridSelectionModelChangeParams) => void>((params) => {
    dispatch(setEntries(params.selectionModel as string[]))
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className={commonStyle.content}>
      <div className={styles.gridContainer}>
        {
          eventsStatus === 'idle' && <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection selectionModel={entryIds} onSelectionModelChange={onSelectionModelChange} />
        }
        {
          eventsStatus === 'loading' && <CircularProgress />
        }
      </div>
    </Container>
  );
}
