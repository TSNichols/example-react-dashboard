import { Grid, Box, Button, IconButton, Typography, useTheme } from '@mui/material'
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
const cardShadow = 5

const Dashboard = () => {
  const theme = useTheme()

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
        <Box>
          <Button
            variant='text'
            sx={{
              color: theme.palette.neutral.main,
              backgroundColor: theme.palette.secondary.main,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 15px',
              boxShadow: cardShadow,
              '&:hover': {
                color: theme.palette.neutral.dark,
                backgroundColor: theme.palette.accent.blue.main,
              },
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
            backgroundColor={theme.palette.secondary.main}
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ boxShadow: cardShadow }}
          >
            <StatBox 
              title = '12,361'
              subtitle='Emails Sent'
              progress='0.75'
              increase='+14%'
              icon={
                <EmailIcon
                  sx={{
                    color: theme.palette.accent.green.main,
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
            backgroundColor={theme.palette.secondary.main}
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ boxShadow: cardShadow }}
          >
            <StatBox 
              title = '431,225'
              subtitle='Sales Obtained'
              progress='0.5'
              increase='+21%'
              icon={
                <PointOfSaleIcon
                  sx={{
                    color: theme.palette.accent.green.main,
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
            backgroundColor={theme.palette.secondary.main}
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ boxShadow: cardShadow }}
          >
            <StatBox 
              title = '32,441'
              subtitle='New Clients'
              progress='0.30'
              increase='+5%'
              icon={
                <PersonAddIcon
                  sx={{
                    color: theme.palette.accent.green.main,
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
            backgroundColor={theme.palette.secondary.main}
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ boxShadow: cardShadow }}
          >
            <StatBox 
              title = '1,325,134'
              subtitle='Traffic Inbound'
              progress='0.80'
              increase='+43%'
              icon={
                <TrafficIcon
                  sx={{
                    color: theme.palette.accent.green.main,
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
            backgroundColor={theme.palette.secondary.main}
            height={2 * rowHeight}
            sx={{ boxShadow: cardShadow }}
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
                  fontWeight='bold'
                  color={theme.palette.neutral.main}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  color={theme.palette.accent.green.main}
                >
                  $59,342.32
                </Typography>
              </Box>

              <Box>
                <IconButton>
                  <DownloadOutlinedIcon sx={{ fontSize: '26px', color: theme.palette.accent.green.main }} />
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
            backgroundColor={theme.palette.secondary.main}
            height={2 * rowHeight}
            overflow='auto'
            sx={{ boxShadow: cardShadow }}
          >
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${theme.palette.background.default}`}
              colors={theme.palette.neutral.main}
              p='15px'
              sx={{ mb: '4px' }}
            >
              <Typography
                variant='h5'
                fontWeight='bold'
                color={theme.palette.neutral.main}
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
                borderBottom={`4px solid ${theme.palette.background.default}`}
                p='15px'
              >
                <Box>
                  <Typography variant='h5' fontWeight='bold' color={theme.palette.accent.green.main}>
                    {transaction.txId}
                  </Typography>
                  <Typography fontWeight='600' color={theme.palette.neutral.main}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box fontWeight='600' color={theme.palette.neutral.main}>
                  {transaction.date}
                </Box>
                <Box
                  fontWeight='600'
                  color={theme.palette.neutral.dark}
                  backgroundColor={theme.palette.accent.green.main}
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
        {/* Campaign */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={theme.palette.secondary.main}
            height={2 * rowHeight}
            p='20px'
            sx={{ boxShadow: cardShadow }}
          >
            <Typography variant='h5' fontWeight='bold' color={theme.palette.neutral.main}>
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
                fontWeight='600'
                color={theme.palette.accent.green.main}
                sx={{ mt: '15px' }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography fontWeight='600'>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Sales */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            backgroundColor={theme.palette.secondary.main}
            height={2 * rowHeight}
            p='20px'
            sx={{ boxShadow: cardShadow }}
          >
            <Typography variant='h5' fontWeight='bold' color={theme.palette.neutral.main}>
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
            backgroundColor={theme.palette.secondary.main}
            height={2 * rowHeight}
            p='20px'
            sx={{ boxShadow: cardShadow }}
          >
            <Typography variant='h5' fontWeight='bold' color={theme.palette.neutral.main} sx={{ mb: '15px' }}>
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