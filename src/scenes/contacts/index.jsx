import { Box, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { mockDataContacts } from '../../data/mockData'
import Header from "../../components/Header"

const Contacts = () => {
  const theme = useTheme()

  const columns = [
    { 
      field: 'id',
      headerName: 'ID',
      flex: 0.25,
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID',
      flex: 0.75,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      flex: 0.25,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zipcode',
      flex: 1,
    },
  ]

  return (
    <Box m='20px'>
      <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGird-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: theme.palette.accent.green.dark
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.accent.blue.main,
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.secondary.main
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.accent.blue.main,
            borderTop: 'none',
            borderRadius: '0 0 5px 5px',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.neutral.main} !important`
          }
        }}
      >
        <DataGrid 
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts