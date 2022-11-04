import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='LINE CHART' subtitle='Simple Line Chart'/>
      <Box height='75vh'>
        <LineChart />
      </Box>  
    </Box>
  )
}

export default Line