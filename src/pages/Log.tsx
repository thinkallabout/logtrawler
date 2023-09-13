import { Typography } from '@mui/material'
import AppBar from '../components/AppBar'
import routes from './routes'
import Wrapper from '../components/Wrapper'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar
} from '@mui/x-data-grid'

const rows: GridRowsProp = [
  {
    id: 1,
    date: '09-09',
    timestamp: '16:03:23',
    pid: 1234,
    tid: 1234,
    level: 'W',
    process: 'com.google.android.music',
    tag: 'MusicPlayerActivity',
    message: 'Hello World'
  },
  {
    id: 2,
    date: '09-09',
    timestamp: '16:03:23',
    pid: 1234,
    tid: 1234,
    level: 'I',
    process: 'com.android.vending',
    tag: 'GmsCore',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra quam sed est dignissim sodales. Sed accumsan eget erat at tincidunt. Pellentesque commodo felis sed porttitor semper. '
  }
]

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 100 },
  { field: 'timestamp', headerName: 'Timestamp', width: 150 },
  { field: 'pid', headerName: 'PID', width: 100 },
  { field: 'tid', headerName: 'TID', width: 100 },
  { field: 'process', headerName: 'Process', width: 250 },
  { field: 'level', headerName: 'Log Level', width: 150 },
  { field: 'tag', headerName: 'Tag', width: 150 },
  { field: 'message', headerName: 'Message', width: 1000 }
]

const Log = () => {
  return (
    <>
      // TODO: File input.
      <AppBar
        title='felix-logcat_2023_09_01.log.txt'
        linkBackTo={routes.home}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        density='compact'
      />
    </>
  )
}

export default Log
