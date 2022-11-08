import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"

const Team = () => {
  const theme = useTheme()

  const columns = [
    { 
      field: 'id',
      headerName: 'ID',
      flex: 0.25,
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
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: {access}}) => {
        return (
          <Box
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={theme.palette.accent.green.main}
            borderRadius='4px'
          >
            {access === 'Admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'Manager' && <SecurityOutlinedIcon />}
            {access === 'User' && <LockOpenOutlinedIcon />}
            <Typography color={theme.palette.neutral.dark} sx={{ mx: '5px' }} fontWeight='600'>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m='20px'>
      <Header title='TEAM' subtitle='Managing the Team Members' />
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
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}

export default Team