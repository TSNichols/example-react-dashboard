import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { mockDataInvoices } from '../../data/mockData'
import Header from "../../components/Header"

const Invoices = () => {
  const theme = useTheme()

  const columns = [
    { 
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={theme.palette.accent.green.dark}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ]

  return (
    <Box m='20px'>
      <Header title='Invoices' subtitle='List of Invoice Balances' />
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
          '& .MuiCheckbox-root': {
            color: `${theme.palette.accent.green.dark} !important`
          }
        }}
      >
        <DataGrid 
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Invoices