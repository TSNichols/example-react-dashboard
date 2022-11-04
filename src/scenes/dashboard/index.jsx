import { Grid, Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
import BarChart from '../../components/BarChart'
import GeoChart from '../../components/GeoChart'
import StatBox from '../../components/StatBox'
import ProgressCircle from '../../components/ProgressCircle'

const rowHeight = 140

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 15px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download
          </Button>
        </Box>  
      </Box>

      {/* GRID & CHARTS */}
      <Grid container spacing={2.5} >

        {/* ROW 1 */}
        {/* Emails */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <StatBox 
              title = '12,361'
              subtitle='Emails Sent'
              progress='0.75'
              increase='+14%'
              icon={
                <EmailIcon
                  sx={{
                    color: colors.greenAccent[600],
                    fontSize: '26px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        {/* Sales */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <StatBox 
              title = '431,225'
              subtitle='Sales Obtained'
              progress='0.5'
              increase='+21%'
              icon={
                <PointOfSaleIcon
                  sx={{
                    color: colors.greenAccent[600],
                    fontSize: '26px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        {/* Clients */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <StatBox 
              title = '32,441'
              subtitle='New Clients'
              progress='0.30'
              increase='+5%'
              icon={
                <PersonAddIcon
                  sx={{
                    color: colors.greenAccent[600],
                    fontSize: '26px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        {/* Traffic */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <StatBox 
              title = '1,325,134'
              subtitle='Traffic Inbound'
              progress='0.80'
              increase='+43%'
              icon={
                <TrafficIcon
                  sx={{
                    color: colors.greenAccent[600],
                    fontSize: '26px',
                  }}
                />
              }
            />
          </Box>
        </Grid>

        {/* ROW 2 */}
        {/* Line Chart */}
        <Grid item xs={12} sm={12} md={8}>
          <Box
            backgroundColor={colors.primary[400]}
            height={2 * rowHeight}
          >
            {/* Chart Headers */}
            <Box
              p='20px 20px 0 20px'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Box>
                <Typography
                  variant='h5'
                  fontWeight='600'
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant='h3'
                  fontWeight='bold'
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>

              <Box>
                <IconButton>
                  <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
                </IconButton>
              </Box>
            </Box>

            {/* LINE CHART */}
            <Box
              height='250px'
              mt='-35px' 
            >
              <LineChart isDashboard={true} />
            </Box>

          </Box>
        </Grid>
        {/* Recent Transactions */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            height={2 * rowHeight}
            overflow='auto'
          >
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p='15px'
            >
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i)=>(
              <Box
                key={`${transaction.txId}-${i}`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom={`4px solid ${colors.primary[500]}`}
                p='15px'
              >
                <Box>
                  <Typography
                    variant='h5'
                    fontWeight='600'
                    color={colors.greenAccent[500]}
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography
                    color={colors.grey[100]}
                  >
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>
                  {transaction.date}
                </Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p='5px 10px'
                  borderRadius='4px'
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* ROW 3 */}
        {/* Revenue */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            height={2 * rowHeight}
            p='20px'
          >
            <Typography variant='h5' fontWeight='600'>
              Campaign
            </Typography>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              mt='25px'
            >
              <ProgressCircle size='125' />
              <Typography
                variant='h5'
                color={colors.greenAccent[500]}
                sx={{ mt: '15px' }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Sales */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            height={2 * rowHeight}
            p='20px'
          >
            <Typography variant='h5' fontWeight='600'>
              Sales Quantity
            </Typography>
            <Box
              height='100%'
              width='100%'
              mt='20px'
            >
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        {/* Geography */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            height={2 * rowHeight}
            p='20px'
          >
            <Typography variant='h5' fontWeight='600' sx={{ mb: '15px' }}>
              Geography Based Traffic
            </Typography>
            <Box
              height='200px'
            >
              <GeoChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>

      </Grid>

    </Box>
  )
} 

export default Dashboard