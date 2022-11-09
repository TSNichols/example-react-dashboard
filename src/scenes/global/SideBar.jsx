import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  return (
    <MenuItem
      active={selected === to}
      style={{ color: theme.palette.neutral.main }}
      onClick={ () => setSelected(to) }
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme()
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [selected, setSelected] = useState(location.pathname)

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${theme.palette.secondary.main} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-inner-item:hover': {
          color: `${theme.palette.accent.blue.light} !important`
        },
        '& .pro-menu-item.active': {
          color: `${theme.palette.accent.blue.dark} !important`
        },
        boxShadow: 5
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
        
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={ () => setIsCollapsed(!isCollapsed) }
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: theme.palette.neutral.main,
            }}
          >
            {!isCollapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <Typography variant='h3' color={theme.palette.neutral.main}>
                  ADMINIS
                </Typography>
                <IconButton onClick={ () => setIsCollapsed(!isCollapsed) }>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb='25px' >
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={'/example-react-dashboard/assets/user.jpg'}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>

              <Box textAlign='center'>
                <Typography
                  variant="h2"
                  color={theme.palette.neutral.main}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  Talcott Nichols
                </Typography>
                <Typography
                  variant="h5"
                  color={theme.palette.accent.green.main}
                >
                  VP All-Things-Data
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item 
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography 
              variant='h6'
              color={theme.palette.neutral.light}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item 
              title='Manage Team'
              to='/team'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Contacts Information'
              to='/contacts'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Invoices Balances'
              to='/invoices'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography 
              variant='h6'
              color={theme.palette.neutral.light}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item 
              title='Profile Form'
              to='/form'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Calendar'
              to='/calendar'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography 
              variant='h6'
              color={theme.palette.neutral.light}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item 
              title='Bar Chart'
              to='/bar'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Pie Chart'
              to='/pie'
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Line Chart'
              to='/line'
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Geography Chart'
              to='/geography'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>

        </Menu>
      </ProSidebar>
    </Box>
  )
} 

export default SideBar